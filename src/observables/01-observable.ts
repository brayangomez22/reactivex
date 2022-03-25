import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
	error: error => console.error('Error:', error),
	complete: () => console.info('Completed')
}    

const obs$ = new Observable<string>((subs) => {
	subs.next('Hello');
	subs.next('World');

	subs.next('Hello');
	subs.next('World');

	subs.next('Hello');
	subs.next('World');

    const a = undefined;
    a.name = 'Brayan';

	subs.complete();

	subs.next('Hello');
	subs.next('World');
});

obs$.subscribe(observer)