var express = require('express');
const airlineTicket_controllers= require('../controllers/AirlineTicket');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET airlineTicket */
router.get('/', airlineTicket_controllers.AirlineTicket_view_all_Page );
// GET request for one airlineTicket.
router.get('/AirlineTicket/:id', airlineTicket_controllers.AirlineTicket_detail);
/* GET detail airlineTicket page */
router.get('/detail',secured, airlineTicket_controllers.AirlineTicket_view_one_Page);
/* GET create airlineTicket page */
router.get('/create',secured, airlineTicket_controllers.AirlineTicket_create_Page);
/* GET create update page */
router.get('/update',secured, airlineTicket_controllers.AirlineTicket_update_Page);
/* GET delete airlineTicket page */
router.get('/delete',secured, airlineTicket_controllers.AirlineTicket_delete_Page);

module.exports = router;