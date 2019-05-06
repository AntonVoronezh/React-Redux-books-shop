import { connect } from 'react-redux';
import { setBooksAC } from '../../store/reducers/booksReducer';
import App from '../../components/App/App'

const mapStateToProps = state => {
	return {
		...state.booksLvl,
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
