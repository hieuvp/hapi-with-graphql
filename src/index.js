// index.js
//

// Application entrypoint. Actually starts the server.
const server = require('./server');

// Start the server, detail out what's going on.
server.start((startError) => {
  if (startError) {
    console.log(`An error occurred starting the server: ${startError}`);
    throw startError;
  }

  server.connections.forEach((connection) => {
    const label = connection.settings.labels[0];
    const { protocol, host, port } = connection.info;

    console.log(`${label} running at: ${protocol}://${host}:${port}`);
  });
});
