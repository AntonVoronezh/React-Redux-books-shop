import { connect } from 'react-redux';
import { setBooksAC } from '../../store/reducers/booksReducer';
import App from '../../components/App/App';
import filter from '../../helpers/filter';
import search from '../../helpers/search';

const mapStateToProps = state => {
	return {
		...state.booksLvl,
		// books: filter(state.booksLvl.books, state.ui.activeItem)

		// books:  !state.isLoading ? filter(state.booksLvl.books, state.ui.activeItem): null,

			books: !state.isLoading ? filter(search(state.booksLvl.books, 'ро'), state.ui.activeItem) : null, 

		// (?   [] : if() ?books:filter(search(state.booksLvl.books, 'е'), state.ui.activeItem)),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setBooksCB: books => dispatch(setBooksAC(books)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
