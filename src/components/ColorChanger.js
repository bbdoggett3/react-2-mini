import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" 
      onChange ={event => this.props.update(event.target.value)}
      disabled ={ this.props.allowEdit === 'false'}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
