import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1, 5);

numbers$
	.pipe(
		tap((x) => console.log('before:', x)),
		map((val) => val * 10),
		tap({
			next: (x) => console.log('after:', x),
			complete: () => console.log('complete'),
		})
	)
	.subscribe((val) => console.log('subs:', val));
