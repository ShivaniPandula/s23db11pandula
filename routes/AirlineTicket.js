var express = require('express');
const airlineTicket_controllers= require('../controllers/AirlineTicket');
var router = express.Router();
/* GET costumes */
router.get('/', airlineTicket_controllers.AirlineTicket_view_all_Page );
module.exports = router;