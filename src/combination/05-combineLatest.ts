import { combineLatest, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$ = fromEvent<PointerEvent>(document, 'click');

// combineLatest(keyup$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.type = 'email';
input1.placeholder = 'pepe@gmail.com';

input2.type = 'password';
input2.placeholder = '************';

document.querySelector('body').append(input1, input2);

const getInput = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup').pipe(pluck('target', 'value'));

combineLatest(getInput(input1), getInput(input2)).subscribe(console.log);
