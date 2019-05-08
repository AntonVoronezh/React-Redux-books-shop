import { connect } from 'react-redux';
import { changeActiveItemFilterAC } from '../../store/reducers/uiReduser';
import {  addToCardAC, deleteFromCardAC } from '../../store/reducers/cardReducer';
import Card from '../../components/Card/Card';

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
)(Card);
