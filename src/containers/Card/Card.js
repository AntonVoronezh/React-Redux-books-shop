import { connect } from 'react-redux';
import { deleteFromCardAC } from '../../store/reducers/cardReducer';
import Card from '../../components/Card/Card';

const mapStateToProps = ({ card }) => {
	return {
		...card,
		total: card.list.reduce((sum, el) => el.price + sum, 0),
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
