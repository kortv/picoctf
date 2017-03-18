import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import Images from '../Images';
import Texts from '../Texts';

class MainLayout extends Component {

  componentDidMount() {
    // return this.loadCourse();
    this.props.actions.fetchCourse();
  }

  render() {
    const {
      images,
      texts,
    } = this.props;

    return (
      <div className='app'>
        {(images && images.length) ? <Images images={images} /> : null}
        {(texts && texts.length) ? <Texts texts={texts} /> : null}
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
