export default (array, query) => {
	return array.filter(b => b.title.toLowerCase().indexOf(query.toLowerCase()));
};
