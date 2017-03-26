import React, { PureComponent } from 'react';
import { COURSE_PATH } from '../../../constants';

class Images extends PureComponent {

  render() {
    return (
      <div className="b-story_img">
        <img src={`${COURSE_PATH}${this.props.src}`} alt="" />
      </div>
    );
  }
}

export default Images;
