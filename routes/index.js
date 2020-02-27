var express = require('express');
var router = express.Router();
router.use('/script', express.static('public'))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo App' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
     name: 'JD',
     hobbies: ['golf','fishing','biking']
     });
});
router.get('/company', function(req, res, next) {
  res.render('company', { title: 'Todo App' });
});
module.exports = router;
