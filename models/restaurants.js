const express = require('express');

function createRestaurant(db) {
  const router = express.Router();
  const labelID = '';
  router.get('/restaurant', function (req, res, next) {
    db.query(
      'SELECT restaurantID, name, email FROM restaurant',
      [labelID, 10*(req.params.page || 0)],
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

module.exports = createRestaurant;