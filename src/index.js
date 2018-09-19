import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/reducer";

/*	{
		list:[
			{
				name: 'sad',
				describe: 'ddd',
				id: '1',
				color: '#ffac75',
				colorChange: false,
				missions: [
					{
						type: list || mission,
						id: 0,
						pid: -1,
						complete: false || true
					}
				]
			}
		],
	}
*/

let obj = '';

if (localStorage.getItem('data')) {
	obj = JSON.parse(localStorage.getItem('data'));
}else {
	obj = {
		list:[
			{
				name: 'sad',
				describe: 'ddd',
				id: '1',
				color: '#ffac75',
				missions: []
			}
		],
	};
	localStorage.setItem('data',JSON.stringify(obj))
}

let store = createStore(reducer,obj);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
document.getElementById('root'));
