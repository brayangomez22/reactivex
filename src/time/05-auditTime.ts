import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
	.pipe(
		map(({ x }) => x),
		tap((val) => console.log('tap: ', val)),
		auditTime(5000)
	)
	.subscribe(console.log);
