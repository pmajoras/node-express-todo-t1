"use strict";

/**
 * 
 */
function setup(app, controllers) {

  // Iterate the controllers configuration
  controllers.forEach(function(setupController) {
    setupController(app);
  });
}

exports.setup = setup;