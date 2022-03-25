import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinct()).subscribe(console.log);

interface Person {
	name: string;
}

const persons: Person[] = [{ name: 'Megaman' }, { name: 'X' }, { name: 'Zero' }, { name: 'Dr. Willy' }, { name: 'X' }, { name: 'Megaman' }, { name: 'Zero' }];

from(persons)
	.pipe(distinct((p) => p.name))
	.subscribe(console.log);
