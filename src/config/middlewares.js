const isAdmin = (req, res, next) => {
    if (req.cookies.admin) {
        next();
    } else {
        res.redirect('/admin');
    };
};

module.exports = {
    isAdmin
}