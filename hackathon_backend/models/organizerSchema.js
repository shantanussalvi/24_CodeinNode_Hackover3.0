const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema({
    eventType: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    eventDesc: {
        type: String,
        required: true
    },
    document: {
        type: Buffer,
        required: true
    },
    datetime: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
})


const Organizer = mongoose.model('organizers', organizerSchema);

module.exports = Organizer;

