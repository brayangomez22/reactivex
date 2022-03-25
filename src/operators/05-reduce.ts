import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const totalReducer = (acc: number, act: number): number => acc + act;

interval(1000)
	.pipe(take(3), tap(console.log), reduce(totalReducer))
	.subscribe({
		next: (val) => console.log('next:', val),
		complete: () => console.log('complete'),
	});
