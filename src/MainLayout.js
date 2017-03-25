import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import * as ScreenComponents from './components';

class MainLayout extends Component {

  componentDidMount() {
    // return this.loadCourse();
    this.props.actions.fetchCourse();
  }  

  render() {
    const {
      currentScreen: {
        screen,
      }
    } = this.props;

    const Screen = ScreenComponents[screen] || ScreenComponents['ImgChat'];

    return (
      <div className='app' style={{ color: 'white' }}>
        <Screen />
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    ...store.course,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
