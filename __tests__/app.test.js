const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { after, before, test } = require('node:test');

const { app, RESPONSE_TEXT } = require('../app');

let server;
let baseUrl;

before(async () => {
  server = createServer(app);

  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

test('GET / returns status 200', async () => {
  const response = await fetch(`${baseUrl}/`);

  assert.equal(response.status, 200);
});

test('GET / returns the expected response body', async () => {
  const response = await fetch(`${baseUrl}/`);
  const body = await response.text();

  assert.equal(body, RESPONSE_TEXT);
});
