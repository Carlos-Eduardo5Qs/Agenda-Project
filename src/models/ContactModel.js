const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, requided: false, default: '' },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.error = [];
    this.contact = null;
};

Contact.searchId = async function(id) {
    if(typeof id !== 'string') return
    const user = await ContactModel.findById(id);

    return user;
};

Contact.prototype.register = async function() {
    this.validation();

    if(this.error.length > 0) return;

    this.contact = await ContactModel.create(this.body);
};
 
Contact.prototype.validation = function() {
    this.clearData();

    if(this.body.email && !validator.isEmail(this.body.email)) {
        return this.error.push('Email inválido');
    };

    if(!this.body.name) return this.error.push('Nome é um campo obrigatório');
    
    if(!this.body.email && !this.body.phone) {
        return this.error.push('Email ou Telefone precisa ser enviado');
    };
};

Contact.prototype.clearData = function() {
    this.body = {
        name: String(this.body.name),
        lastName: String(this.body.lastName),
        email: String(this.body.email),
        phone: String(this.body.phone),
    };
};

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validation();
    if(this.error.length > 0) return;

    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
};

module.exports = Contact;
