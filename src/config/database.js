require('dotenv').config();

const mongoose = require('mongoose');

const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB CONNECTED SUCCESSFULLY');
    }).catch((error) => {
        console.log('DB CONNECTION FAILED');
        console.error(error.message);
        process.exit(1);
    });
};