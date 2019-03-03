import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppComponent from './AppComponent';
import { getModel } from './selectors';

class AppContainer extends Component {
  render() {
    return <AppComponent {...this.props}/>
  } 
}

function mapStateToProps(state) {
  return {
    model: getModel(state)
  };
}

export default connect(
  mapStateToProps,
)(AppContainer);
