const express = require('express');
const bcrypt = require('bcrypt');

function logUser(db) {
  const router = express.Router();
  router.post('/login', function (req, res, next) {
    
	var loginUsername=req.body.email;
	var storedLogin='';
	
	var loginPassword=req.body.password;
    // find the email address in the customers table
	// if it is there hash the passed password and compare with stored hash
	// bcrypt.compare(loginPassword,storedHash).then((res) => {
	//	if (res === true)// passwords match
	
	
	if(username&&password){
    db.query(
        'SELECT password FROM customer WHERE email=?', loginUsername,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
			if (results){
				//user exists; retrieved stored hash
				
				bcrypt.compare(loginPassword,results).then((res) => {
					if(res){
						
						res.status(200).json(results);
						//correct login 
						// redirect
						//add jwt 
					}else{
						res.status(500).json({status: 'error'});
					}
				});
			}else{
				console.log(error);
				res.status(500).json({status: 'error'});
			}
        }
      }
    )
    }
  });
  return router;
}
module.exports = logUser;