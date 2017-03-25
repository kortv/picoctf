import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import Images from '../Images';
import Texts from '../Texts';
import StoryBoard from "../Controls";
import FullScreenBackground from "../FullScreenBackground/index";

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
        <div className="b-wrapper">
          {/*{(images && images.length) ? <Images images={images} /> : null}*/}
          {/*{(texts && texts.length) ? <Texts texts={texts} /> : null}*/}
        </div>
        <FullScreenBackground/>
        <StoryBoard />
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
