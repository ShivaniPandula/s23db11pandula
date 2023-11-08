var AirlineTicket = require('../models/AirlineTicket');
// List of all AirlineTickets
exports.AirlineTicket_list = function(req, res) {
 res.send('NOT IMPLEMENTED: AirlineTicket list');
};
// for a specific AirlineTicket.
exports.AirlineTicket_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: AirlineTicket detail: ' + req.params.id);
};
// Handle AirlineTicket create on POST.
exports.AirlineTicket_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: AirlineTicket create POST');
};
// Handle AirlineTicket delete form on DELETE.
exports.AirlineTicket_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: AirlineTicket delete DELETE ' + req.params.id);
};
// Handle AirlineTicket update form on PUT.
exports.AirlineTicket_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: AirlineTicket update PUT' + req.params.id);
};
exports.AirlineTicket_list = async function(req, res) {
    try{
    theAirlineTicket = await AirlineTicket.find();
    res.send(theAirlineTicket);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.AirlineTicket_view_all_Page = async function(req, res) {
    try{
    theAirlineTickets = await AirlineTicket.find();
    res.render('AirlineTicket', { title: 'AirlineTicket Search Results', results: theAirlineTickets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };