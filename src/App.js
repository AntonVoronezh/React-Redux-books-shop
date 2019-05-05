import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookAC } from './store/reducers/booksReducer';
import './App.css';

// let bookF = { id: 2, title: 'Книга 22' };

class App extends Component {

	componentDidMount() {
		
	}

  buttonAddBookHandler = book => {
    // this.props.addBookCB(bookF);
  }

	render() {
		const { books } = this.props;

		return (
			<div className="App">
				{books[0].title}
				<br />
				<button onClick={this.buttonAddBookHandler}> add book</button>
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
		addBookCB: book => dispatch(addBookAC(book)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
