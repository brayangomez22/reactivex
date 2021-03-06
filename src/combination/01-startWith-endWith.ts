import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4).pipe(startWith('a', 'b', 'c'), endWith('x', 'y', 'z')).subscribe(console.log);
