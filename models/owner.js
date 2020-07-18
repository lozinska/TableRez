const express = require('express');

function createOwner(db) {
  const router = express.Router();
  router.post('/owner', function (req, res, next) {
    db.query(
        'INSERT INTO owner ( firstName, lastName, phone, email, password) VALUES (?,?,?,?,?)',
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
  router.get('/owner', function (req, res, next) {
    db.query(
        'SELECT * FROM owner',
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

  router.get('/owner/:id', function (req, res, next) {
    db.query(
        'SELECT * FROM owner WHERE userID=?',
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

  router.put('/owner/:id', function (req, res, next) {
    db.query(
      'UPDATE owner SET firstName=?, lastName=?, phone=?, email=?, password=? WHERE userID=?',
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

module.exports = createOwner;