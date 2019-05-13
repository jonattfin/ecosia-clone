import React from 'react';

import styles from './styles.module.scss';

export default class Counter extends React.Component {
  state = { counter: 1000000 * 50 }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => { return { counter: prevState.counter + 2 } })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className={styles.counter}>
        <h1 className={styles.counter__text}>
          {this.state.counter.toLocaleString()}
        </h1>
        <div>
          Trees planted by Ecosia users
        </div>
      </div>
    );
  }
}

