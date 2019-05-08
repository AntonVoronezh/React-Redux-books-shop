import React from 'react';
import Book from './Book/Book';
import { Card, Loader } from 'semantic-ui-react';

export default ({ books: array, isLoading, addToCardCB }) => {
	let books;

	if (!isLoading) {
		books = array.map(b => {
			return <Book key={b.id} {...b} addToCardCB={addToCardCB}/>;
		});
	}

	return (
		<Card.Group itemsPerRow={4}>
			{isLoading ?  <Loader active inline='centered' /> : books}
		</Card.Group>
	);
};
