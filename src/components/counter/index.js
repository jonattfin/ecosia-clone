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
    const { showText = true, fontSize = '2.5em' } = this.props;

    return (
      <div className={styles.counter}>
        <div style={{ fontSize }} className={styles.counter__text}>
          {this.state.counter.toLocaleString()}
        </div>
        {
          showText && (
            <div>
              Trees planted by Ecosia users
            </div>
          )
        }
      </div >
    );
  }
}

