const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const labelID = '';
  router.get('/restaurant', function (req, res, next) {
    db.query(
      'SELECT labelID, labelName FROM top20label',
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

module.exports = createRouter;