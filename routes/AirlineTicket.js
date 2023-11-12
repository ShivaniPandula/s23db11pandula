var express = require('express');
const airlineTicket_controllers= require('../controllers/AirlineTicket');
var router = express.Router();
/* GET airlineTicket */
router.get('/', airlineTicket_controllers.AirlineTicket_view_all_Page );
// GET request for one airlineTicket.
router.get('/AirlineTicket/:id', airlineTicket_controllers.AirlineTicket_detail);
/* GET detail airlineTicket page */
router.get('/detail', airlineTicket_controllers.AirlineTicket_view_one_Page);
/* GET create costume page */
router.get('/create', airlineTicket_controllers.AirlineTicket_create_Page);
/* GET create update page */
router.get('/update', airlineTicket_controllers.AirlineTicket_update_Page);
/* GET delete costume page */
router.get('/delete', airlineTicket_controllers.AirlineTicket_delete_Page);
module.exports = router;