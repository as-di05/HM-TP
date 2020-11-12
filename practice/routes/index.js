var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Добро пожаловать!' });
});

router.get('/a', function(req, res, next) {
  res.render('a', { ttitle: 'A' });
});

router.get('/b', function(req, res, next) {
  res.render('b', { ttitle: 'B' });
});

router.get('/c', function(req, res, next) {
  res.render('c', { ttitle: 'C' });
});

router.get('/d', function(req, res, next) {
  res.render('d', { ttitle: 'D' });
});

router.get('/e', function(req, res, next) {
  res.render('e', { ttitle: 'E' });
});

router.get('/f', function(req, res, next) {
  res.render('f', { ttitle: 'F' });
});

router.get('/g', function(req, res, next) {
  res.render('g', { ttitle: 'G' });
});

router.get('/h', function(req, res, next) {
  res.render('h', { ttitle: 'H' });
});

router.get('/i', function(req, res, next) {
  res.render('i', { ttitle: 'I' });
});

router.get('/j', function(req, res, next) {
  res.render('j', { ttitle: 'J' });
});

router.get('/k', function(req, res, next) {
  res.render('k', { ttitle: 'K' });
});

router.get('/l', function(req, res, next) {
  res.render('l', { ttitle: 'L' });
});

router.get('/m', function(req, res, next) {
  res.render('m', { ttitle: 'M' });
});

router.get('/n', function(req, res, next) {
  res.render('n', { ttitle: 'N' });
});

router.get('/o', function(req, res, next) {
  res.render('o', { ttitle: 'O' });
});

router.get('/p', function(req, res, next) {
  res.render('p', { ttitle: 'P' });
});

module.exports = router;
