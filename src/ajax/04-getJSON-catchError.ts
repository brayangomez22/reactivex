import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const catchErrors = (err: AjaxError) => {
	console.log('Error: ', err.message);
	return of([]);
};

// const obs$ = ajax.getJSON(url).pipe(catchError(catchErrors));
// const obs2$ = ajax(url).pipe(catchError(catchErrors));

// obs$.subscribe((data) => console.log('getJSON', data));
// obs2$.subscribe((data) => console.log('ajax', data));

const obs$ = ajax
	.getJSON(url)
	.pipe(catchError(catchErrors))
	.subscribe({
		next: (val) => console.log('Next: ', val),
		error: (err) => console.log('Error: ', err),
		complete: () => console.log('complete'),
	});
