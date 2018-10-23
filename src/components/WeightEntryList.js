import React, { Component } from 'react';
import { distanceInWords } from 'date-fns';

function diffFromWeight (weight, weights) {
  const before = weights[weights.indexOf(weight) - 1];
  return (before ? weight.value - before.value : 0).toFixed(2);
}

class WeightEntryList extends Component {
  render() {
    return (
      <div className="weight-entry-list">
        <table className="table is-bordered is-striped is-hoverable is-fullwidth appear">
          <thead>
            <tr>
              <th><span className="fa fa-weight"></span></th>
              <th><span className="fa fa-calendar"></span></th>
              <th><span className="fa fa-chart-area"></span></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.weights.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((w) => (
              <tr key={w.uuid} className="appear">
                <td>{w.value} kg</td>
                <td>{distanceInWords(new Date(w.createdAt), new Date())}</td>
                <td>{diffFromWeight(w, this.props.weights)} kg</td>
                <td className="remove-column">
                  <a onClick={() => this.props.removeWeight(w.uuid)}>
                    <span className="fa fa-times"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeightEntryList;