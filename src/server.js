const hapi = require('hapi');
const mongoose = require('mongoose');
const { apolloHapi, graphiqlHapi } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

mongoose.connect('mongodb://192.168.99.100:27017/test_database', {
  user: 'admin',
  pass: '123456',
  auth: { authdb: 'admin' },
  useMongoClient: true,
  promiseLibrary: global.Promise
});

const executableSchema = makeExecutableSchema({
  resolvers,
  typeDefs: [schema]
});

const server = new hapi.Server();

server.connection([
  {
    host: '0.0.0.0',
    port: 8080,
    routes: { cors: true },
    labels: ['api', 'docs']
  }
]);

const plugins = [
  {
    register: apolloHapi,
    options: {
      path: '/graphql',
      apolloOptions: () => ({
        pretty: true,
        schema: executableSchema
      })
    }
  },
  {
    register: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      }
    }
  }
];

server.register(plugins, (err) => {
  if (err) {
    console.error('error loading plugin ', err);
  }
});

// Export the server. If you are running unit tests, just require it and
// call 'inject'. If you are running integration tests or want to start the
// server, you'll need to call 'start'. See index.js.
module.exports = server;
