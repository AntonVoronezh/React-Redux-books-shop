import { connect } from 'react-redux';
import { changeActiveItemFilterAC } from '../../store/reducers/uiReduser';
import Filter from '../../components/Filter/Filter';

const mapStateToProps = state => {
	return {
		...state.ui,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeActiveItemFilterCB: item => dispatch(changeActiveItemFilterAC(item)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter);
