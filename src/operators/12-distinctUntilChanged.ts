import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Person {
	name: string;
}

const persons: Person[] = [{ name: 'Megaman' }, { name: 'Megaman' }, { name: 'Zero' }, { name: 'Dr. Willy' }, { name: 'X' }, { name: 'X' }, { name: 'Zero' }];

from(persons)
	.pipe(distinctUntilChanged((ant, act) => ant.name === act.name))
	.subscribe(console.log);
