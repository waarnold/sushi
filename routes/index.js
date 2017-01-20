var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/menu.json');

function getMenu() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    menu: getMenu(),
  });
});

router.get('/menu/:id', function (req, res) {
  res.render('detailed', {
    menu: getMenu(),
  });
});

router.get('/checkout', function (req, res) {
  res.render('checkout', {
    menu: getMenu(),
  });
});

module.exports = router;
