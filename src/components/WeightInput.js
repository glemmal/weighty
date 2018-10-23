import React, { Component } from 'react';
import uuid from 'uuid';

class WeightInput extends Component {

  constructor (props) {
    super(props);
    
    this.state = { 
      weightValue: ''
    };

    this.onWeightChange = this.onWeightChange.bind(this);
    this.onSubmitWeight = this.onSubmitWeight.bind(this);
  }

  onWeightChange (e) {
    const weightValue = e.target.value;

    this.setState({
      weightValue
    });
  }

  onSubmitWeight (e) {
    e.preventDefault();

    if (!this.state.weightValue) {
      return;
    }

    this.props.addWeight({
      value: parseFloat(this.state.weightValue),
      uuid: uuid(),
      createdAt: Date.now()
    });

    this.setState({
      weightValue: ''
    })
  }

  render () {
    return (
      <div className="weight-input appear">
        <form className="form">
          <div className="field has-addons">
            <p className="control has-icons-left has-icons-right">
              <input value={this.state.weightValue} 
                onChange={this.onWeightChange} 
                className="input is-large" 
                type="number" 
                placeholder="75" 
                step="0.1" 
                min="1"
                required />
              <span className="icon is-left">
                <i className="fas fa-weight"></i>
              </span>
              <span className="icon is-right">
                kg
              </span>
            </p>
            <div className="control">
              <button onClick={this.onSubmitWeight} className="button is-large">
                <span className="fa fa-plus"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WeightInput