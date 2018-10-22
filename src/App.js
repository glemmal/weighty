import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { addWeight, removeWeight } from './store/actions/weightActions';
import './App.css';

class App extends Component {

  addWeight = (event) => {
    this.props.addWeight(300);
  }

  removeWeight = (event) => {
    this.props.removeWeight(300);
  }

  onInputChange (event) {
    this.props.addWeight(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input placeholder="add some weight" onChange={this.onInputChange.bind(this)}/>
          <button onClick={this.addWeight}>Add some weight!</button>
          <button onClick={this.removeWeight}>Remove some weight!</button>
          <ul>
            {this.props.weights.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addWeight: (weight) => dispatch(addWeight(weight)),
  removeWeight: (weight) => dispatch(removeWeight(weight))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
