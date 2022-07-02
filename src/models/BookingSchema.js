const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    money: {
        type: Number,
        required: true
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
    },
    time: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);