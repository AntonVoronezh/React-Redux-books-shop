import React from 'react';
import Book from './Book/Book';

export default ({ books: array, isLoading }) => {
    let books;

	if (!isLoading) {
		books = array.map(b => {
			return <Book key={b.id} {...b}/>;
		});
	}

	return (
		<div>
			<div className="App">{isLoading ? 'загрузка...' : books}</div>;
		</div>
	);
};
