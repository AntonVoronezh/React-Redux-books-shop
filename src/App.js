import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addBookAC} from './store/reducers/booksReducer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       dd
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addBookCB: book => dispatch(addBookAC(book))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
