import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

// REFERENCES
const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Loading';

const body = document.querySelector('body');

// STREAM
ajax
	.getJSON('https://reqres.in/api/users/2?delay=2')
	.pipe(startWith(true))
	.subscribe((resp) => {
		resp ? body.append(loading) : document.querySelector('.loading').remove();
		console.log(resp);
	});
