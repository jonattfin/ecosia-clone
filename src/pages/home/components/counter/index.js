import React from 'react';

import './style.scss';

export default class Counter extends React.Component {
  state = { counter: 100000 }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => { return { counter: prevState.counter + 2 } })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 className="text-wrapper">
          {this.state.counter}
        </h1>
        <div>
          Trees planted by Ecosia users
        </div>
      </div>
    );
  }
}