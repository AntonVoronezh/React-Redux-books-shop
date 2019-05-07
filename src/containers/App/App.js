import { connect } from 'react-redux';
import { setBooksAC, addSearchTextAC } from '../../store/reducers/booksReducer';
import App from '../../components/App/App';
import filter from '../../helpers/filter';
import search from '../../helpers/search';

const mapStateToProps = state => {
	return {
		...state.booksLvl,
		books: filter(search(state.booksLvl.books, 'ро'), state.ui.activeItem),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setBooksCB: books => dispatch(setBooksAC(books)),
		addSearchTextCB: text => dispatch(addSearchTextAC(text)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
