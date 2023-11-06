const { User, conn } = require("../../../db");
const bcrypt = require("bcrypt");
const dataValidator = require("./dataValidator");
const CustomError = require("../../middleware/CustomError");

const createUser = async ({ email = "", password = "" }) => {
  const validatedData = dataValidator({ email, password });
  const transaction = await conn.transaction(); // Inicia la transacción
  try {
    if (await User.findOne({ where: { email: email } }))
      throw new CustomError("ValidationError", "User email already exists.");

    validatedData.password = await bcrypt.hash(validatedData.password, 10);
    const user = await User.create(validatedData, { transaction });

    await transaction.commit(); // Confirma la transacción
    return user.toJSON();
  } catch (error) {
    if (transaction.finished !== "commit") await transaction.rollback();
    throw error;
  }
};
module.exports = createUser;
