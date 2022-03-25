import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

merge(keyup$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(console.log);
