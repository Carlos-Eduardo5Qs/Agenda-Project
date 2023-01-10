const Contact = require('./../models/ContactModel.js');

exports.editForm = (req, res) => {
    res.render('add-registration.ejs', {
        contact: {},
    });
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
        req.session.save(() => res.redirect(`/add/index/${contact.contact._id}`));
        return;

    } catch(err) {
        console.error(err);
    };
};

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.send('!!!ERROR 404 NOTFOUND!!!');

    const contact = await Contact.searchId(req.params.id);
    if(!contact) return res.send('!!!ERROR 404 NOTFOUND!!!');

    res.render('add-registration.ejs', { contact });
};

exports.edit = async function(req,res) {
    try{
        if(!req.params.id) res.send('!!!ERROR 404 NOTFOUND!!!');
        const contact = new Contact(req.body);
        await contact.edit(req.params.id);

        if(contact.error.length > 0) {
            req.flash('errors', contact.error);
            req.session.save(() => res.redirect('back'));
            return;
        };

        req.flash('success', 'Contato editado com sucesso');
        req.session.save(() => res.redirect(`/add/index/${contact.contact._id}`));
        return;
    } catch(err) {
        console.error(err);
        res.send('!!!ERROR 404 NOTFOUND!!!');
    };
        
};
