const Contact = require('./../models/ContactModel.js');

exports.editForm = (req, res) => {
    res.render('add-registration.ejs');
    return;
};

exports.addContact = async function(req, res) {
    try{
        const contact = new Contact(req.body);
        await contact.register();

        if(contact.error.length > 0) {
            req.flash('errors', contact.error);
            req.session.save( () => res.redirect('back'));
            return;
        };

        req.flash('success', 'Contato registrado com sucesso');
        req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
        return;

    } catch(err) {
        console.error(err);
    };
};


