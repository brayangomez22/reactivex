import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const interval$ = interval(1000).pipe(take(3));

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
