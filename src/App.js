import './App.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWeight, removeWeight } from './store/actions/weightActions';

import Navigation from './components/Navigation';
import WeightInput from './components/WeightInput';
import WeightEntryList from './components/WeightEntryList';
import WeightGraph from './components/WeightGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="container weighty-container">
          <div className="input-widget tile box">
            {this.props.weights.length > 0 &&
              <WeightGraph weights={this.props.weights} />
            }
            <WeightInput addWeight={this.props.addWeight}></WeightInput>
            {this.props.weights.length > 0 && 
              <WeightEntryList removeWeight={this.props.removeWeight} 
              weights={this.props.weights} />
            }
          </div>
        </div>
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
