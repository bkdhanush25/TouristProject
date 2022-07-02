const express = require('express');
const BookingSchema = require('../models/BookingSchema');
const CitySchema = require('../models/CitySchema');
const PlaceSchema = require('../models/PlaceSchema');

const router = express.Router();

router.get('/', async (req, res) => {
    const bookings = await BookingSchema.find().populate('place').sort({ date: -1 });
    res.render('dashboard', { bookings });
});

router.get('/add-city', (req, res) => {
    res.render('add-city');
});

router.post('/add-city', (req, res) => {
    const { city, state } = req.body;
    CitySchema.create({ city, state })
    .then(() => {
        res.redirect('/dashboard');
    }).catch(err => {
        res.send(err);
    });
});

router.get('/add-place', async (req, res) => {
    const cities = await CitySchema.find().sort({ city: 1 });
    res.render('add-place', { cities });
});

router.post('/add-place', (req, res) => {
    const { name, description, city } = req.body;
    PlaceSchema.create({ name, description, city })
    .then(() => {
        res.redirect('/dashboard');
    }).catch(err => {
        res.send(err);
    });
});

module.exports = router;