import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
// 	.pipe(filter((val) => val % 2 === 1))
// 	.subscribe(console.log);

// range(1, 10)
// 	.pipe(
// 		filter((val, i) => {
// 			console.log('index: ', i);
// 			return val % 2 === 1;
// 		})
// 	)
// 	.subscribe(console.log);

// ----------------------
// interface Character {
//     type: string;
//     name: string;
// }

// const characters: Character[] = [
//     {
//         type: 'hero',
//         name: 'Batman'
//     },
//     {
//         type: 'hero',
//         name: 'Robin'
//     },
//     {
//         type: 'villain',
//         name: 'Joker'
//     }
// ]

// from(characters)
//     .pipe(filter(({ type }) => type === 'hero'))
// 	.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
	.pipe(
		map((event) => event.code),
		filter((key) => key === 'Enter')
	)
	.subscribe(console.log);
