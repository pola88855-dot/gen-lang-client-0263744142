const test = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { createApp } = require('../src/app');

test('GET /health returns ok payload', async () => {
  const app = createApp();
  const server = createServer(app);

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();

  const response = await fetch(`http://127.0.0.1:${address.port}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, { status: 'ok' });

  await new Promise((resolve) => server.close(resolve));
});
