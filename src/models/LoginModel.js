const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

    async entry() {
        this.validation();

        if(this.error.length > 0) return;

        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.error.push('Email invalido');
            return;
        };

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) { 
            this.error.push('Senha inválida');
            this.user = null;
            return;
        };
    };

   async register() {
        this.validation();

        if(this.error.length > 0) return;

        await this.userExists();

        if(this.error.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        this.user = await LoginModel.create(this.body);
        
    };

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.error.push('Esta conta já foi cadastrada');
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

