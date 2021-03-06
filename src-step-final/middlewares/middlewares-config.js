"use strict";

var errorHandlers = require(__dirname + '/error-middlewares/error-handlers');

/**
 * 
 */
function setup(app) {

  app.use(function(req, res, next) {
    res.setJsonResponse = function(json, statusCode) {
      res.jsonContent = json;
      res.jsonResponseStatusCode = statusCode || 200;
    };

    res.getCurrentResponse = function() {
      return {
        content: res.jsonContent,
        status: res.jsonResponseStatusCode
      };
    };

    next();
  });
}

function setupErrorHandlers(app) {
  
  app.use(errorHandlers.errorLogHandler);
  app.use(errorHandlers.errorHandler);
}

module.exports.setupErrorHandlers = setupErrorHandlers;
module.exports.setup = setup;