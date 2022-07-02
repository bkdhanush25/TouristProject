const express = require('express');
const BookingSchema = require('../models/BookingSchema');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('book-tour');
});

router.post('/', async (req, res) => {
    const { name, email, phone, date } = req.body;
    const { place } = req.query;
    console.log(name, email, phone, date, place);
    await BookingSchema.create({ name, email, phone, place, date });
    res.redirect('/');
});


module.exports = router;