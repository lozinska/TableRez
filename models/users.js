const express = require('express');

function createUser(db) {
  const router = express.Router();
  const owner = '';
  router.post('/user', function (req, res, next) {
    db.query(
        'INSERT INTO customer ( firstName, lastName, phone, email, password) VALUES (?,?,?,?,?)',
        [ req.body.firstName,req.body.lastName, req.body.phone, req.body.email,req.body.password],
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
  router.get('/user', function (req, res, next) {
    db.query(
        'SELECT userID, firstName, lastName, phone, email, password FROM customer',
        [req.body.userID, req.body.firstName,req.body.lastName, req.body.phone, req.body.email,req.body.password],
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

  router.put('/user/:id', function (req, res, next) {
    db.query(
      'UPDATE customer SET firstName=?, lastName=?, phone=?, email=?, password=? WHERE id=?',
      [req.body.firstName, req.body.lastName, req.body.phone,req.body.email,req.body.password, req.params.userID],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  // the routes are defined here

  return router;
}

module.exports = createUser;