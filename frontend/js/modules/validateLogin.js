const validator = require('validator');

class ValidateLogin {
	constructor(classForm) {
		this.form = document.querySelector(classForm);
		this.email = document.querySelector('input[name="email"]');
		this.password = document.querySelector('input[name="password"]');
		this.error = null;
	};

	init() {
		this.events();
		return;
	};

	events() {
		this.form.addEventListener('submit', event => {
			event.preventDefault();
			this.validateData();
		});
	};

	validateData() {

		if(!validator.isEmail(this.email.value)) {
			this.error = true;
			alert('Email inválido');
		} else {
			this.error = null;
		};

		if(this.password.value.length < 3 || this.password.value.length > 50) {
			this.error = true;
			alert('Senha inválida');
		} else {
			this.error = null;
		};

		if(this.error === null) return this.form.submit();
	};
};

const login = new ValidateLogin('#log-into');
login.init();
