const { createServer } = require('node:http');
const router = require("./routers/index.js")
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
  router.run(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

