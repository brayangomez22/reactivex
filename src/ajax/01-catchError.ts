import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/usaers?per_page=5';

const handlingErrors = (response: Response) => {
	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
};

const catchErrors = (err: AjaxError) => {
	console.log('Error: ', err.message);
	return of([]);
};

// const fetchPromise = fetch(url);

// fetchPromise
// 	.then(handlingErrors)
// 	.then((resp) => resp.json())
// 	.then((resp) => console.log(resp))
// 	.catch((err) => console.error(err));

ajax(url)
	.pipe(
		map(({ response }) => response),
		catchError(catchErrors)
	)
	.subscribe(console.log);
