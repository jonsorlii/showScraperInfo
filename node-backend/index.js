const express = require('express');
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: 'password',
    database: 'scrapy',
});

app.use(cors()); 
app.use(express.json())
app.use(bodyParser.urlencoded({extend: true}))


app.post("/api/insert", (req,res) => {

  const tickerName = req.body.tickerName; 
  const sqlInsert = "INSERT INTO ticker (ticker_name) VALUES (?)"
  db.query(sqlInsert, [tickerName], (err,result) => {
    console.log(tickerName)
  })
});

app.delete("/api/delete/:ticker_name", (req,res) => {

  const ticker_name = req.params.ticker_name; 
  const sqlDelete = "DELETE FROM ticker WHERE ticker_name = ?"
  db.query(sqlDelete, ticker_name, (err,result) => {
    if (err) {
      console.log(err)
    }
    console.log("TEST")
    res.send(result)
  })
});

app.get('/api/get', (req,res) => {
  const sqlSelect = "SELECT * FROM ticker";
  db.query(sqlSelect, (err,result) => {
    res.send(result);
  })
});

app.listen(3001, () => {
  console.log("Running port 3001")
});
