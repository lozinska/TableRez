const express = require('express');



function createRouter(db) {
  var auth = express.Router();
  
  auth.post('/register', function (req, res) {
    console.log(req.body);
  });
  // the routes are defined here

  return auth;
}

module.exports = createRouter;

