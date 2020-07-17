const express = require('express');

function createMenuItem(db) {
const router = express.Router();

router.get('/item/:id', function (req, res, next) {
    db.query(
      'SELECT * FROM item WHERE sectionID=?',
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
  return router;
}
module.exports=createMenuItem;