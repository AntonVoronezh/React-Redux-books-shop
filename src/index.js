import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store/store';

const store = createStore();

store.dispatch({ type: 'SET_BOOKS', payload: [{ id: 1, title: 'Книга 1' }] });

setTimeout(() => {
	store.dispatch({ type: 'ADD_BOOK', payload:  { id: 2, title: 'Книга 22' } });
}, 2500);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
