require('dotenv').config();
const express = require('express');
const { isAdmin } = require('../config/middlewares');
const CitySchema = require('../models/CitySchema');

const router = express.Router();

router.use('/admin', require('./admin'));
router.use('/book-tour', require('./book-tour'));
router.use('/dashboard', isAdmin, require('./dashboard'));
router.use('/city', require('./city'));

router.get('/', async (req, res) => {
    const cities = await CitySchema.find().sort({ city: 1 });
    res.render('index', { cities });
});

module.exports = router;