const CustomError = require("../../middleware/CustomError");

const dataValidator = (data) => {
  const regexName = /^[a-zA-Z0-9]+$/;
  const regexEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  //const regexURL = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (!regexName.test(data.name)) {
    throw new CustomError(
      "ValidationError",
      "The name of the user cannot contain special characters."
    );
  }

  if (!data.email.length) {
    throw new CustomError("BadRequest", "email");
  }
  if (!regexEmail.test(data.email)) {
    throw new CustomError(
      "ValidationError",
      "The email of the user must be a valid email."
    );
  }

  if (!data.password.length) {
    throw new CustomError("BadRequest", "password");
  }
  if (!regexName.test(data.password)) {
    throw new CustomError(
      "ValidationError",
      "The password missing or invalid."
    );
  }
  return data;
};

module.exports = dataValidator;
