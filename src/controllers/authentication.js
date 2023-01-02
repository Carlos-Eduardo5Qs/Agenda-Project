const Authentication = require('./../models/AuthenticationModel.js');

exports.mainPage = (req, res) => {
    if(!req.session.user) return res.render('login.ejs');
    return res.render('index.ejs');
};

exports.loginPage = (req, res) => {
    if(req.session.user) return res.render('index.ejs');
    return res.render('login.ejs');
};

exports.registerPage = (req, res) => {
    if(req.session.user) return res.render('index.ejs');
    return res.render('register.ejs');
};

exports.register = async function(req, res) {
    try{
        const authentication = new Authentication(req.body);
        await authentication.register();
    
        if(authentication.error.length > 0) {
            req.flash('errors', authentication.error);
            req.session.save(function() {
                return res.redirect('back');
            });
            return;
        };

        req.flash('success', 'Sua conta foi criada com sucesso');
        req.session.save(function() {
            return res.redirect('back');
        });
    }catch(err) {
        console.log(e);
    };
};

exports.login = async function(req, res) {
    try{
        const authentication = new Authentication(req.body);
        await authentication.entry();

        if(authentication.error.length > 0) {
            req.flash('errors', authentication.error);
            req.session.save(function() {
                return res.redirect('back');
            });
            return;
        };
    
        req.flash('success', 'Você foi logado com sucesso');
        req.session.user = authentication.user;
        req.session.save(function() {
            return res.redirect('/');
        });
    }catch(err) {
        console.log(err);
    };
};

exports.logout = (req,res) => {
    req.session.destroy();
    res.redirect('/login/index');
    return;
};
