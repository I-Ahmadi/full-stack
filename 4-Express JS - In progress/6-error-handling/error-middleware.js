/*
  Error Middleware
  ----------------
  Error middleware has four parameters:

    (err, req, res, next)

  Put it after routes.
*/

const express = require("express");
const { AppError } = require("./custom-error-class");

function globalErrorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: err.status || "error",
    message: err.message || "Something went wrong",
  });
}

function createApp() {
  const app = express();

  app.get("/broken", (req, res, next) => {
    next(new AppError("This route failed on purpose", 400));
  });

  app.use(globalErrorHandler);

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /broken"));
}

module.exports = { createApp, globalErrorHandler };
