import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click').pipe(
	tap(() => console.log('Before tap')),
	skip(1),
	tap(() => console.log('After tap'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (v) => console.log('next:', v),
	complete: () => console.log('complete'),
});
