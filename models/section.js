const express = require('express');

function createSection(db) {
const router = express.Router();

router.get('/section/:id', function (req, res, next) {
    db.query(
      'SELECT * FROM section WHERE menuID=?',
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
module.exports=createSection;