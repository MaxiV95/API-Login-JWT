const { User, conn } = require("../../../db");
const CustomError = require("../../middleware/CustomError");
const dataValidator = require("./dataValidator");

const updateUser = async ({ id, email = "", password = "", name = null }) => {
  const validatedData = dataValidator({ name, email, password });
  const transaction = await conn.transaction(); // Inicia la transacción
  try {
    const user = await User.findByPk(id, { transaction });
    if (!user) throw new CustomError("", "User with id: ${id} not found.", 404);

    await user.update(validatedData, { transaction });

    // Agrega relaciones
    //ej await user.setPosts(posts, { transaction });

    await transaction.commit(); // Confirma la transacción
    return user.toJSON();
  } catch (error) {
    if (transaction.finished !== "commit") await transaction.rollback();
    throw error;
  }
};
module.exports = updateUser;
