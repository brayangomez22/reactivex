import { of, from, async } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
	next: (val) => console.log('next:', val),
	complete: () => console.log('complete'),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Brayan');
// source$.subscribe(observer);

// const source$ = from(fetch('https://api.github.com/users/brayangomez22'));
// source$.subscribe(async (resp) => {
//     const data = await resp.json();
//     console.log(data);
// });

const myGenerator = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const myIterable = myGenerator();

from(myIterable).subscribe(observer)
