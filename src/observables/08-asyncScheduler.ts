import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// const hello = () => console.log('Hello World');
const hello2 = (name) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(hello, 2000);
// asyncScheduler.schedule(hello2, 2000, 'Brayan');

const subs = asyncScheduler.schedule(
	function (state) {
		console.log('state: ', state);
		this.schedule(state + 1, 1000);
	},

	3000,
	0
);

// setTimeout(() => {
// 	subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
