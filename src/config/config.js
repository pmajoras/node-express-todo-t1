"use strict";

var config = {};

if (process.env.NODE_TUT_ENV === 'PROD') {
  config = {
    secret: "testSecret",
    apiPort: 8085,
    connectionString: 'mongodb://localhost/TodoTutorialV1'
  };
}
else {
  config = {
    secret: "testSecret",
    apiPort: 8080,
    connectionString: 'mongodb://localhost/TodoTutorialV1'
  };
}

module.exports = config;