import orderBy from 'lodash/orderBy';

export default (array, type) => {
	switch (type) {
		case 'all':
			return array;
		case 'byPriceExpansive':
			return orderBy(array, 'price', 'desc');
		case 'byPriceCheap':
			return orderBy(array, 'price', 'asc');
		case 'author':
			return orderBy(array, 'author', 'desc');
		default:
			return array;
	}
};
