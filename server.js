const { createServer } = require('node:http');

const { app } = require('./app');

const port = Number(process.env.PORT) || 3000;
const server = createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
