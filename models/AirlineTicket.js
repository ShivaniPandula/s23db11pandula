const mongoose = require("mongoose");

const AirlineTicketsSchema = mongoose.Schema({
    passengerName: {
        type: String,
        required: true
    },
    ticketNumber: {
        type: Number,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});

module.exports = mongoose.model("AirlineTicket", AirlineTicketsSchema);
