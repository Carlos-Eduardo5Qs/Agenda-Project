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
    this.user = null;
}

Contact.prototype.register = function() {
    this.validation();
};

Contact.prototype.validation = function() {
    this.clearData();
};

Contact.prototype.clearData = function() {
    
};

module.exports = Contact;
