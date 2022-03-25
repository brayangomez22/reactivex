import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
	.pipe(
		tap((t) => console.log('tap: ', t)),
		take(3)
	)
	.subscribe({
		next: (v) => console.log('next:', v),
		complete: () => console.log('complete'),
	});
