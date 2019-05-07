import { connect } from 'react-redux';
import { changeActiveItemFilterAC } from '../../store/reducers/uiReduser';
import {  addSearchTextAC } from '../../store/reducers/booksReducer';
import Filter from '../../components/Filter/Filter';

const mapStateToProps = state => {
	return {
		...state.ui,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeActiveItemFilterCB: item => dispatch(changeActiveItemFilterAC(item)),
		addSearchTextCB: text => dispatch(addSearchTextAC(text)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter);
