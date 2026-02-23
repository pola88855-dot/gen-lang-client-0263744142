const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const { requestLogger } = require('./middleware/requestLogger');
const { errorHandler } = require('./middleware/errorHandler');

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  app.use('/', healthRoutes);
  app.use('/auth', authRoutes);

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
