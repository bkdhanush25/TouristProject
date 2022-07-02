const express = require('express');
const BookingSchema = require('../models/BookingSchema');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('book-tour');
});

router.post('/', async (req, res) => {
    const { money, time } = req.body;
    const { place } = req.query;
    console.log(money, time, place);
    await BookingSchema.create({ money, time, place});
    res.redirect('/');
});


module.exports = router;