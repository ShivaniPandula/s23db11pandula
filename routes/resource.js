var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var AirlineTicket_controller = require('../controllers/AirlineTicket');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// AirlineTicket ROUTES ///
// POST request for creating a AirlineTicket.
router.post('/AirlineTicket', AirlineTicket_controller.AirlineTicket_create_post);
// DELETE request to delete AirlineTicket.
router.delete('/AirlineTicket/:id', AirlineTicket_controller.AirlineTicket_delete);
// PUT request to update AirlineTicket.
router.put('/AirlineTicket/:id', AirlineTicket_controller.AirlineTicket_update_put);
// GET request for one AirlineTicket.
router.get('/AirlineTicket/:id', AirlineTicket_controller.AirlineTicket_detail);
// GET request for list of all AirlineTicket items.
router.get('/AirlineTicket', AirlineTicket_controller.AirlineTicket_list);
module.exports = router;