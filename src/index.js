const hapi = require('hapi');
const mongoose = require('mongoose');

const server = new hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 8080
});

mongoose.connect('mongodb://192.168.99.100:27017/test_database', {
  useMongoClient: true
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
