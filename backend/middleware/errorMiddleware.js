// errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // If the error has a status code, use it. Otherwise, set it to 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
  
    // Send the status code and error message as a JSON response
    res.status(statusCode).json({
      error: {
        status: statusCode,
        message: err.message || 'Internal Server Error',
      },
    });
  };
  
  module.exports = errorHandler;
  