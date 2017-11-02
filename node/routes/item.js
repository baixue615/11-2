var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '123456',
  database:'xinwen'
});
//增加
//
router.post('/list', function(req, res, next) {
  var  n=req.body.n;
  var  t=req.body.t;
  var  c=req.body.c;
  console.log(req.body)
  res.header('Access-Control-Allow-Origin','*');
    connection.query("INSERT INTO list (name,title,con,time) VALUES('"+n+"','"+t+"','"+c+"',now())",function(err,rows){
       res.send(rows)
       console.log(rows)
    });
})

router.get('/dta', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM list",function(err,rows){
       res.send(rows)
    })
  });

module.exports = router; 
