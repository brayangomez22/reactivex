import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

// ajax
// 	.put(
// 		url,
// 		{
// 			id: 1,
// 			name: 'PEPE',
// 		},
// 		{
// 			token: 'ABDASDA',
// 		}
// 	)
// 	.subscribe(console.log);

ajax({
	url,
	method: 'POST',
	headers: {
		token: 'DADASDAS',
	},
	body: {
		id: 1,
		name: 'PEPE',
	},
}).subscribe(console.log);
