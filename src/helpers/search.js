export default (array, query) => {
	if (array) return array.filter(b => b.title.toLowerCase().indexOf(query.toLowerCase()) >= 0);
};
