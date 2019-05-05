import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from './store/reducers/booksReducer';
import axios from 'axios';
import './App.css';


class App extends Component {
	componentDidMount() {
		axios.get('/data.json').then(({ data }) => this.props.setBooksCB(data));
	}

	render() {
			const { books } = this.props;
		return (
			<div className="App">

				{books ? 'загрузка...' : '+++' + books}
			</div>
		);
	}
}

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
