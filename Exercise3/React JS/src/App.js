import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  Count = () => {
    this.setState({
      count:this.state.count + 1
    })
  }
  render() {
    let { count } = this.state
    return(
      <div>
        <h1>{ count }</h1>
        <br/>
        <Button
        text = { "Click" }
        execute = { () => this.Count() }
        />
      </div>
    );
  }
}
export default App;