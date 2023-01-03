exports.middlewareGlobal = ( req, res, next ) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.loginRequired = ( req, res, next ) => {
    if(!req.session.user) {
        req.session.save(() => res.redirect('/login/index'));
        return;
    };
    next();
};

exports.whileLoggedIn = (req, res, next ) => {
    if(req.session.user) {
        req.session.save(() => res.redirect('/'));
        return;
    };
    next();
};
