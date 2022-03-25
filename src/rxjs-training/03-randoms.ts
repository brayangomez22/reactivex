import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales,
 * emitan exactamente el mismo valor
 *
 * Tip: Hot Observable? subjects?
 */

(() => {
	const reloj$ = interval(1000).pipe(
		take(5),
		map((val) => Math.round(Math.random() * 100))
	);

	const subject$ = new Subject();
	reloj$.subscribe(subject$);

	subject$.subscribe((val) => console.log('obs1', val));
	subject$.subscribe((val) => console.log('obs2', val));
})();
