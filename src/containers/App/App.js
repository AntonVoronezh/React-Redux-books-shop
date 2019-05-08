import { connect } from 'react-redux';
import { setBooksAC } from '../../store/reducers/booksReducer';
import { addToCardAC } from '../../store/reducers/cardReducer';
import App from '../../components/App/App';
import filter from '../../helpers/filter';
import search from '../../helpers/search';

const mapStateToProps = ({booksLvl, ui}) => {
	return {
		...booksLvl,
		books: filter(search(booksLvl.books, booksLvl.searchText), ui.activeItem),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setBooksCB: books => dispatch(setBooksAC(books)),
		addToCardCB: book => dispatch(addToCardAC(book)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
