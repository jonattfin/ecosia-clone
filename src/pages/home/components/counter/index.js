import React from 'react';

import './styles.scss';

export default class Counter extends React.Component {
  state = { counter: 100000 }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => { return { counter: prevState.counter + 2 } })
    }, 1000);
  }

  render() {
    return (
      <div className="counter">
        <h1 className="counter__text">
          {this.state.counter}
        </h1>
        <div>
          Trees planted by Ecosia users
        </div>
      </div>
    );
  }
}
