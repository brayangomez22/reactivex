import { of, interval, delay, forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin({ num: numbers$, int: interval$, let: letters$ }).subscribe(console.log);
