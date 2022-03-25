import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeMap } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const showUsers = (users: GithubUser[]) => {
	console.log(users);
	orderList.innerHTML = '';

	for (const user of users) {
		const li = document.createElement('li');
		const img = document.createElement('img');
		img.src = user.avatar_url;

		const anchor = document.createElement('a');
		anchor.href = user.html_url;
		anchor.text = ' see page';
		anchor.target = '_blank';

		li.append(img);
		li.append(user.login + '');
		li.append(anchor);

		orderList.append(li);
	}
};

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
	.pipe(
		debounceTime<KeyboardEvent>(500),
		map<KeyboardEvent, string>(({ target }) => target['value']),
		mergeMap<string, Observable<GithubUsersResp>>((url) => ajax.getJSON(`https://api.github.com/search/users?q=${url}`)),
		map<GithubUsersResp, GithubUser[]>(({ items }) => items)
	)
	.subscribe(showUsers);
