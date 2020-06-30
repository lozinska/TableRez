const express = require('express');

function logUser(db) {
  const router = express.Router();
  router.post('/login', function (req, res, next) {
    var username=req.body.email;
    var password=req.body.password;
    if(username&&password){
    db.query(
        'SELECT * FROM customer WHERE email=? AND password=?', [username,password],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    )
    }
  });
  return router;
}
module.exports = logUser;