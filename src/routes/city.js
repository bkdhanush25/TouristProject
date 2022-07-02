const express = require('express');
const CitySchema = require('../models/CitySchema');
const PlaceSchema = require('../models/PlaceSchema');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const city = await CitySchema.findById(id);
    const places = await PlaceSchema.find({ city: id }).sort({ name: 1 });
    res.render('city', { city, places });
});

module.exports = router;