import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponent from './homeComponent';
import * as duckActions from './homeDuck';
import { getModel } from './selectors';

class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props}/>
  } 
}

function mapStateToProps(state) {
  return {
    model: getModel(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(duckActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
