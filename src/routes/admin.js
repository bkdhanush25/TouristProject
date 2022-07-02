const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    if(req.cookies.admin){
        res.redirect('/dashboard');
        return;
    }
    res.render('admin');
});

router.post('/', (req, res) => {
    const {email, password} = req.body;
    if (email == process.env.EMAIL && password == process.env.PASSWORD ) {
        res.cookie('admin', true);
        res.redirect('/dashboard');
    } else {
        res.redirect('/admin');
    }
});

module.exports = router;