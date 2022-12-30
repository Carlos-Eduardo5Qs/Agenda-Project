const Login = require('./../models/LoginModel');

exports.index = (req, res) => {
    res.render('login.ejs');
    return;
};

exports.register = async function(req, res) {
    try{
        const login = new Login(req.body);
        await login.register();
    
        if(login.error.length > 0) {
            req.flash('errors', login.error);
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
        const login = new Login(req.body);
        await login.entry();

        if(login.error.length > 0) {
            req.flash('errors', login.error);
            req.session.save(function() {
                return res.redirect('back');
            });
            return;
        };
    
        req.flash('success', 'Você foi logado com sucesso');
        req.session.user = login.user;
        req.session.save(function() {
            return res.redirect('back');
        });
    }catch(err) {
        console.log(err);
    };
};
