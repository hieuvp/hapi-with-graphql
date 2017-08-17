const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 8080
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
