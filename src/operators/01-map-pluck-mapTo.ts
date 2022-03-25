import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5)
// 	.pipe(map<number, string>((val) => (val * 10).toString()))
// 	.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(map((event) => event.code)).subscribe((val) => console.log('map:', val));
keyup$.pipe(pluck('target', 'baseURI')).subscribe((val) => console.log('pluck:', val));
keyup$.pipe(mapTo('key pressed')).subscribe((val) => console.log('mapTo:', val));
