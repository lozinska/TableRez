const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const labelID = '';
  router.post('/user', function (req, res, next) {
    db.query(
        'INSERT INTO customer (owner, name, description, date) VALUES (?,?,?,?)',
        [userID, req.body.firstName,req.body.lastName, req.body.phone, req.body.email,req.body.password],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  // the routes are defined here

  return router;
}

module.exports = createRouter;