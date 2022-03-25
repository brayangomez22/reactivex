import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('Next:', value),
	error: (error) => console.error('Error:', error),
	complete: () => console.info('Completed'),
};

const interval$ = new Observable<number>((subscriber) => {
	const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);

	return () => { clearInterval(intervalID); console.log('Destroy Interval') };
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$)

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)