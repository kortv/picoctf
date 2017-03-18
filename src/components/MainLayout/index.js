import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

import Images from '../Images';

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
      <div>
        {(images && images.length) ? <Images images={images} /> : null}
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

MainLayout.propTypes = {
  /*user: PropTypes.shape({
    courses: PropTypes.object.isRequired,
  }).isRequired,
  params: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    importCourse: PropTypes.func.isRequired,
    selectBook: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,*/
};


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
