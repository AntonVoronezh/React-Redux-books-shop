import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from './store/reducers/booksReducer';
import axios from 'axios';
import './App.css';

// let bookF = { id: 2, title: 'Книга 22' };

class App extends Component {
	componentDidMount() {
		axios.get('/data.json').then(({ data }) => this.props.setBooksCB(data));
	}

	// buttonAddBookHandler = book => {
	// 	// this.props.addBookCB(bookF);
	// };

	render() {
			const { books } = this.props;
		return (
			<div className="App">

				{books.length === 0 ? 'загрузка...' : '+++' + books.length}
				<br />
				{/* <button onClick={this.buttonAddBookHandler}> add book</button> */}
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
