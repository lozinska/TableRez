const express = require('express');

function createRestaurant(db) {
const router = express.Router();

  router.get('/restaurant', function (req, res, next) {
    db.query(
      'SELECT restaurantID, name, email, restaurant_image FROM restaurant',
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
/*
  router.get('/restaurant/:id', function(res,req,next){
    //const restaurant=req.params.id;
    //console.log('Im here');
db.query(
'SELECT name FROM restaurant WHERE restaurantID=?',
[req.params.id],
(error,results) => {
 if (error) {
    res.status(500).json({status: 'error'});
  } else {
    res.status(200).json(results);
  }
}
);
  })
*/
  router.get('/restaurant/:id', function (req, res, next) {
    db.query(
        'SELECT restaurantID, name, email, restaurant_image, restaurant_desc FROM restaurant WHERE restaurantID=?',
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
  
  // the routes are defined here

  return router;
}

module.exports = createRestaurant;