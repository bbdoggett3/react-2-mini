import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updatedEditStatus = this.updatedEditStatus.bind(this);
  }

  // You could create a unversal handler to do what the other ones are doing below with an event.target.value... this would be for later down the road.

  // universalHandler(e) {

  // }

  // updateColor
  updateColor(val) {
    this.setState({fontColor: val})
  }
  // updateSize
  updateSize(val) {
    this.setState({fontSize: val})
  }
  // updateFamily
  updateFamily(val) {
    this.setState({fontFamily: val})
  }
  // updateEditStatus
  updatedEditStatus(val) {
    this.setState({allowEdit: val})
  }

  render() {
    // const {allowEdit, fontFamily, fontColor, fontSize} = this.state
    return (
      <div>
        <div className="headerBar">
        <EditToggle 
          update    = {this.updatedEditStatus} />
        <ColorChanger 
          update    = {this.updateColor} 
          allowEdit = {this.state.allowEdit}/>
        <SizeChanger 
          update    = {this.updateSize} 
          allowEdit = {this.state.allowEdit}/>
        <FamilyChanger 
          update    = {this.updateFamily} 
          allowEdit = {this.state.allowEdit}/>
        </div>
        <div className="textArea">
        <TextContainer 
          fontSize   = {this.state.fontSize} 
          fontColor  = {this.state.fontColor} 
          fontFamily = {this.state.fontFamily} />
        </div>
      </div>
    );
  }
}

export default App;
