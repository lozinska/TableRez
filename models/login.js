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
	
	
	if(loginUsername&&loginPassword){
    db.query(
        'SELECT password FROM customer WHERE email=?', [loginUsername],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
			if (results.length == 1){
				//user exists; retrieved stored hash
				
				bcrypt.compare(loginPassword,results[0]).then((res) => {
					if(res){
						
						res.status(200).json(results);
						//correct login 
						// redirect
						//add jwt 
					}else{
						res.status(500).json({status: 'error'});//invalid password
					}
				});
			}else{
				console.log(error);
				res.status(500).json({status: 'error'});//ivalid username
			}
        }
      }
    )
    }
  });
  return router;
}
module.exports = logUser;