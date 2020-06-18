const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./restaurants');

const connection = mysql.createConnection({
  host     : 'mymysql.senecacollege.ca',
  user     : 'prj566_201a04',
  password : 'ngNQ@6374',
  database : 'prj566_201a04'
});
connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});