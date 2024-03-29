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

   // Handle AirlineTicket create on POST.
exports.AirlineTicket_create_post = async function(req, res) {
    console.log(req.body)
    let document = new AirlineTicket();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"AirlineTicket_type":"goat", "cost":12, "size":"large"}
    document.passengerName = req.body.passengerName;
    document.ticketNumber = req.body.ticketNumber;
    document.seatNumber = req.body.seatNumber;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   //New code for Assigment12 for screenshot1
exports.AirlineTicket_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await AirlineTicket.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Vehicle update form on PUT
exports.AirlineTicket_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await AirlineTicket.findById( req.params.id)
    // Do updates of properties
    if(req.body.passengerName)
    toUpdate.passengerName = req.body.passengerName;
    if(req.body.ticketNumber) toUpdate.ticketNumber = req.body.ticketNumber;
    if(req.body.seatNumber) toUpdate.seatNumber = req.body.seatNumber;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };

   // Handle AirlineTicket delete on DELETE.
exports.AirlineTicket_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await AirlineTicket.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   //New code added for screenshot 6
   // Handle a show one view with id specified by query
exports.AirlineTicket_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await AirlineTicket.findById( req.query.id)
    res.render('AirlineTicketdetail',
   { title: 'AirlineTicket Details', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.AirlineTicket_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('AirlineTicketcreate', { title: 'AirlineTicket Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.AirlineTicket_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await AirlineTicket.findById(req.query.id)
    res.render('AirlineTicketupdate', { title: 'AirlineTicket Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.AirlineTicket_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await AirlineTicket.findById(req.query.id)
    res.render('AirlineTicketdelete', { title: 'AirlineTicket Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };