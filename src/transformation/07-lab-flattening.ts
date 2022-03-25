import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// HELPERS
const login = (user) =>
	ajax.post('https://reqres.in/api/login?delay=1', user).pipe(
		pluck('response', 'token'),
		catchError((err) => of('xxx'))
	);

// FORM HTML
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const buttonSubmit = document.createElement('button');

// SETTINGS FORM
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

buttonSubmit.innerHTML = 'Login';

form.append(inputEmail, inputPassword, buttonSubmit);
document.querySelector('body').append(form);

// STREAMS
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit')
	.pipe(
		tap((e) => e.preventDefault()),
		map(({ target }) => ({
			email: target[0].value,
			password: target[1].value,
		})),
		mergeMap(login)
	)
	.subscribe(console.log);
