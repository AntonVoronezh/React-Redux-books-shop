import { connect } from 'react-redux';
import { addToCardAC, deleteFromCardAC } from '../../store/reducers/cardReducer';
import Card from '../../components/Card/Card';

const mapStateToProps = ({ card }) => {
	return {
		...card,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteFromCardCB: id => dispatch(deleteFromCardAC(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Card);
