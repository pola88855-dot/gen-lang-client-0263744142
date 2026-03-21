function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  console.error('Request failed:', {
    message: err.message,
    details: err.details || null,
    path: req.originalUrl
  });

  return res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
}

module.exports = { errorHandler };
