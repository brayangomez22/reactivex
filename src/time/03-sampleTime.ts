import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
click$
	.pipe(
		sampleTime(3000),
		map(({ x, y }) => ({ x, y }))
	)
	.subscribe(console.log);
