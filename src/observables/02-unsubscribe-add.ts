import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
	error: error => console.error('Error:', error),
	complete: () => console.info('Completed')
}    

const interval$ = new Observable<number>( subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000)

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Interval Destroy');
    }
})

const subs1 = interval$.subscribe(observer)
const subs2 = interval$.subscribe(observer)
const subs3 = interval$.subscribe(observer)

subs1.add(subs2)
subs1.add(subs3)

setTimeout(() => {
    subs1.unsubscribe();

    console.log('Completed timeout');
}, 6000)    