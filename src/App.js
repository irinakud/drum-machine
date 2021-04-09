import './App.css';
import DrumPad from './DrumPad.js'
import {keys} from './keys'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  displayClipName(name) {
    console.log(name);
    this.setState({ name: name });
  }
  render() {
    return (
      <div class="container-fluid">
        <div id="wrapper">
          <div id="drum-machine">
            <div class="name card card-heading text-center bg-info text-white">Music playing: <span id="display">{this.state.name}</span></div>
            <div class="grid-container">
              {keys.map((x, i) => {
                return (
                  <DrumPad keyTrigger={x.keyTrigger} url={x.url} keyCode={x.keyCode} updateDisplay={this.displayClipName.bind(this)} name={x.id} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
