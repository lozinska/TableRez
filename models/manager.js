const express = require('express');

function createManager(db) {
  const router = express.Router();
  router.post('/manager', function (req, res, next) {
    db.query(
        'INSERT INTO manager ( firstName, lastName, phone, email, password, ownerID, restaurantID) VALUES (?,?,?,?,?,?,?)',
        [ req.body.firstName,req.body.lastName, req.body.phone, req.body.email,req.body.password, req.body.ownerID, req.body.restaurantID],
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
  router.get('/manager', function (req, res, next) {
    db.query(
        'SELECT * FROM manager',
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

  router.get('/manager/:id', function (req, res, next) {
    db.query(
        'SELECT * FROM manager WHERE userID=?',
        [req.params.id],
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

  router.put('/manager/:id', function (req, res, next) {
    db.query(
      'UPDATE manager SET firstName=?, lastName=?, phone=?, email=?, password=? WHERE userID=?',
      [req.body.firstName, req.body.lastName, req.body.phone,req.body.email,req.body.password, req.params.id],
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

module.exports = createManager;