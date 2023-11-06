class CustomError extends Error {
  constructor(name = "CustomError", message = "", status = 500) {
    super(name);
    this.name = name;
    this.message = message;
    this.status = status;
  }
}

module.exports = CustomError;
