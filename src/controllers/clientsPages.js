exports.mainPage = (req, res) => {
    req.session.user = { nome: 'Eduardo', log: true  };
    res.render('index.ejs');
};