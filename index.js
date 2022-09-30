require('./src/config/database').connect();

const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./src/routes/index');

const app = express();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 3000;

app.set('views', `${__dirname}/src/views`);
app.set('view engine', 'ejs');

app.use(express.static('./src/static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/contactus", function(req, res) {
    res.render("contactus");
});

app.listen(PORT, () => {
    console.log(`Server Running in ${HOST}:${PORT} `);
});