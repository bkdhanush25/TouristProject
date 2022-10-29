const express = require('express');
const CitySchema = require('../models/CitySchema');
const PlaceSchema = require('../models/PlaceSchema');
const https = require("https");

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const city = await CitySchema.findById(id);
    const places = await PlaceSchema.find({ city: id }).sort({ name: 1 });
    

    const query = city.city;
    const apiKey = "de600c758f7538ed6f4befd5e35f5de2";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url,function(response){        
                response.on("data",function(data){
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].weatherDescription;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                res.render('city', { city, places,temp,imageURL });

        })
    })
});

module.exports = router;