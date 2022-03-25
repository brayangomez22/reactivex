import { fromEvent } from 'rxjs';
import { tap, takeWhile, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
	.pipe(
		tap(() => console.log('tap')),
        map(({ x, y }) => ({ x, y })),
		takeWhile(({ y }) => y <= 150, true)
	)
	.subscribe({
		next: (v) => console.log('next:', v),    
		complete: () => console.log('complete'),
	});
