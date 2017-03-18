import React, { Component } from 'react';

class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      images: this.props.images,
    };
  }

  componentDidMount() {
    this.state.images.forEach((obj) => {
      const time = obj.time.split(':')[1];
      setTimeout(() => {
        this.setState({
          current: obj.src,
        })
      }, time * 1000)
    })
  }

  render() {
    return (
      <div>
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
