var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = {
    name:"윤다영", age:22, major:"컴퓨터공학부"
  }
  res.send(user);
});

module.exports = router;
