const { createApp } = require('./app');
const { env, validateEnv } = require('./config/env');

function start() {
  validateEnv();

  const app = createApp();
  app.listen(env.port, '0.0.0.0', () => {
    console.log(`Server started on port ${env.port}`);
    console.log(`Expected GitHub callback: ${env.githubRedirectUri}`);
  });
}

start();
