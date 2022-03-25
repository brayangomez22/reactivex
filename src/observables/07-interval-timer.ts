import { interval, timer } from 'rxjs';

const observer = {
	next: (val) => console.log('next: ', val),
	complete: () => console.log('complete'),
};

const todayInFive = new Date(); // now
todayInFive.setSeconds(todayInFive.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 100);
const timer$ = timer(todayInFive);

console.log('start');
timer$.subscribe(observer);
console.log('finish');
