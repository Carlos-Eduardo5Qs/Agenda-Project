const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.error = [];
        this.user = null;
    };

   async register() {
        this.validation();
        if(this.error.length > 0) return;

        try{
            this.user = await LoginModel.create(this.body);
        } catch(err) {
            console.log(err);
        };
    };

    validation() {
        this.cleanUp();
        
        if(!validator.isEmail(this.body.email)) this.error.push('Este não é um email válido');

        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.error.push('A senha precisa ter entre 3 e 50 caracteres');
        };
    };

    cleanUp() {
        this.body = {
            email: String(this.body.email),
            password: String(this.body.password),
        };
    };
};

module.exports = Login;

