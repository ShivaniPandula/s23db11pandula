var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('AirlineTicket', { title: 'Search Results AirlineTicket' });
});

module.exports = router;
