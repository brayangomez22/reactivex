import { fromEvent } from 'rxjs';
import { tap, first, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
	.pipe(
		tap(() => console.log('tap')),
        map(({ clientX, clientY }) => ({ clientX, clientY })),
		first((event) => event.clientY >= 150)
	)
	.subscribe({
		next: (v) => console.log('next:', v),
		complete: () => console.log('complete'),
	});
