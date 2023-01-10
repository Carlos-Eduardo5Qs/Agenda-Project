const Contact = require('./../models/ContactModel');

exports.mainPage = async function(req, res) {
    const contacts = await Contact.searchContacts();
    return res.render('index.ejs', { contacts });
};
