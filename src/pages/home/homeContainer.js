import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponent from './homeComponent';
import * as duckActions from './homeDuck';
import { getModel } from './selectors';

class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />
  }
}

const mapStateToProps = state => ({ model: getModel(state) });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(duckActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
