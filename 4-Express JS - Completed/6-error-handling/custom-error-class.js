/*
  Custom Error Class
  ------------------
  Custom errors let you attach HTTP status codes to thrown errors.
*/

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
  }
}

function createNotFoundError(resource) {
  return new AppError(`${resource} not found`, 404);
}

module.exports = { AppError, createNotFoundError };

if (require.main === module) {
  const error = createNotFoundError("User");
  console.log(error.message);
  console.log(error.statusCode);
}
