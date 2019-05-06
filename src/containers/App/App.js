import { connect } from 'react-redux';
import { setBooksAC } from '../../store/reducers/booksReducer';
import App from '../../components/App/App';
import filter from '../../helpers/filter';

const mapStateToProps = state => {
	return {
		...state.booksLvl,
		books: filter(state.booksLvl.books, state.ui.activeItem)
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
