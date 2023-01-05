const ContactModel = require('./../models/ContactModel.js');

exports.editForm = (req, res) => {
    res.render('add-registration.ejs');
    return;
};

exports.addContact = (req, res) => {
    res.send('Hello!');
};
