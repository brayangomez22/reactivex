import { interval, timer, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
/**
 * Ejercicio: Combinar ambos observables (letras$, numeros$)
 * para que las emisiones sean la concatenación de los últimos
 * valores emitidos
 */

//  Ejemplo de la tada esperada:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() => {
	const letras = ['a', 'b', 'c', 'd', 'e'];
	const numeros = [1, 2, 3, 4, 5];

	// Emite letras cada segundo
	const letras$ = interval(1000).pipe(
		map((i) => letras[i]),
		take(letras.length)
	);

	// Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
	// de 500 milésimas
	const numeros$ = timer(500, 1000).pipe(
		map((i) => numeros[i]),
		take(numeros.length)
	);

	combineLatest(letras$, numeros$)
		.pipe(map(([a, b]) => a + b))
		.subscribe(console.log);
})();
