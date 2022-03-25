import { of } from 'rxjs';

// const obs$ = of([1,2], {a:2,b:1}, function(){}, Promise.resolve(true));
const obs$ = of(...[1, 2, 3, 4, 5], 6, 7, 8);

console.log('Inicio');

obs$.subscribe(
	(next) => console.log('Next:', next),
	null,
	() => console.log('Finish')
);

console.log('Fin');
