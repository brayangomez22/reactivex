import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');
const interval$ = interval(1000);

click$.pipe(switchMap(() => interval$)).subscribe(console.log);
