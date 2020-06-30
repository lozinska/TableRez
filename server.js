const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const restaurants = require('./models/restaurants');
const user = require ('./models/users');
const login = require ('./models/login');
const mysql=require('mysql')
const connection = mysql.createConnection({
 host     : 'mymysql.senecacollege.ca',
  user     : 'prj566_201a04',
  password : 'ngNQ@6374',
  database : 'prj566_201a04'
});

connection.connect();
const port = process.env.PORT || 8080;

const app = express()

//app.use(express.static(path.join(__dirname,'table-rez')));
/*app.use(cors());
app.use(bodyParser.json());
app.use('/register',userRoute);
app.get('/',(req,res)=>{
 res.sendFile(__dirname+'/table-rez/src/'+'index.html')

})*/
  .use(cors())
  .use(bodyParser.json())
  .use(restaurants(connection))
  .use(user(connection))
  .use(login(connection))
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
