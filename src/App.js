import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  componentWillMount() {
    console.log('Component will Mount');
  }

  componentDidMount() {
    console.log('Component did Mount');
  }

  componentWillUnmount() {
    console.log('Component will Unmount');
  }

  render() {
    console.log('render in the render')
    return (
      <div className="App">
        I got rendered
      </div>
    );
  }
}
