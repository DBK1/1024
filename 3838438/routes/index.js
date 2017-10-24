var express = require('express');
var router = express.Router();
var fs=require('fs')
var a=null
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('views/sheb.txt','utf-8', function (err,data) {
    console.log(data)
    res.render('index', { title:data });
  })

});
fs.readFile('views/sheb.txt','utf-8', function (err,data) {
  a=Number(data)
})
router.get('/lei', function(req, res, next) {
  res.render('pielei', { arr: [1,2,3],abc:[4,5,6] });
  a++
  fs.writeFile('views/sheb2.txt','您当前访问的网页已被访问'+a+'次','utf-8', function (err, data) {
  })
});
module.exports = router;
