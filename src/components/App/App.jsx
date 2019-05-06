import React, { Component } from 'react';
import axios from 'axios';
import Books from '../Books/Books';
import Menu from '../Menu/Menu';
import Filter from '../../containers/Filter/Filter';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
	componentDidMount() {
		axios.get('/data.json').then(({ data }) => this.props.setBooksCB(data));
	}

	render() {
		return (
			<Container>
				<Menu />
				<Filter />
				<Books {...this.props} />
			</Container>
		);
	}
}
