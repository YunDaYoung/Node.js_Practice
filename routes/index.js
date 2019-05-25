var express = require('express');
var router = express.Router();
var pool = require("../config/dbconfig");
pool.getConnection((err) => {
  if(err) throw err;
  console.log("dbconnect");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello', src: "/images/img.jpg" });
});

module.exports = router;
