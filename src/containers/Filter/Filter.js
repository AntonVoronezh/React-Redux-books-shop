import { connect } from 'react-redux';
import { setBooksAC } from '../../store/reducers/booksReducer';
import Filter from '../../components/Filter/Filter'

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
)(Filter);
