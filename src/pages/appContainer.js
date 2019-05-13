import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppComponent from './appComponent';
import { getModel } from './selectors';

class AppContainer extends Component {
  render() {
    return <AppComponent {...this.props} />
  }
}

const mapStateToProps = state => ({ model: getModel(state) });

export default connect(
  mapStateToProps,
)(AppContainer);
