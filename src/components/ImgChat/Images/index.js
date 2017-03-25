import React, { Component } from 'react';
import { COURSE_PATH } from '../../../constants';

class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
    };
  }

  componentDidMount() {
    this.props.images.forEach((obj) => {
      const [minuts, sec] = obj.time.split(':');
      setTimeout(() => {
        this.setState({
          current: `${COURSE_PATH}${obj.src}`,
        })
      }, minuts * 60000 + sec * 1000)
    })
  }

  render() {
    return (
      <div className="b-story_img">
        <img src={this.state.current} alt="" />
      </div>
    );
  }
}

Images.propTypes = {
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


export default Images;
