import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from './store/reducers/booksReducer';
import axios from 'axios';
import './App.css';
import Books from './components/Books/Books.jsx';
import Menu from './components/Menu/Menu';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	componentDidMount() {
		axios.get('/data.json').then(({ data }) => this.props.setBooksCB(data));
	}

	render() {
		return (
			<Container>
				<Menu />
				<Books {...this.props} />
			</Container>
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
