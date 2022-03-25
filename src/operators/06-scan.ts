import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalAcc = (acc: number, cur: number): number => acc + cur;

// Reduce
from(numbers).pipe(reduce(totalAcc, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(totalAcc, 0)).subscribe(console.log);

// Redux
interface User {
	id?: string;
	authenticated?: boolean;
	token?: string;
	age?: number;
}

const user: User[] = [
	{
		id: 'fer',
		authenticated: false,
		token: null,
	},
	{
		id: 'fer',
		authenticated: true,
		token: 'ABC',
	},
	{
		id: 'fer',
		authenticated: true,
		token: 'ABCD',
	},
];

const state$ = from(user).pipe(
	scan<User, any>(
		(acc: any, cur: any) => {
			return { ...acc, ...cur };
		},
		{ age: 18 }
	)
);

const id$ = state$.pipe(map((state) => state.id)).subscribe(console.log);
