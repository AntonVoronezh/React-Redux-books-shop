import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from './store/reducers/booksReducer';
import axios from 'axios';
import './App.css';
import Books from './components/Books/Books.jsx';

class App extends Component {
	componentDidMount() {
		axios.get('/data.json').then(({ data }) => this.props.setBooksCB(data));
	}

	render() {
		// const { books, isLoading } = this.props;
		// return <div className="App">{isLoading ? 'загрузка...' : '+++' + books}</div>;
		return (
			<div>
				<Books {...this.props}/>
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
