import React from 'react';
import Continue from './Continue'

const HeadScreen = ({ index, setScreen, title, challenge }) => {

  return (
    <div className="b-desktop_img">
        <img src="img/challenge.png" alt=""/>
        {/*<img src="img/scheme.png" alt=""/>*/}

        <div className="b-centered_text">
            <div>{title}</div>
            {challenge && <div>{challenge}</div>}
        </div>
        <Continue {...{ index, setScreen }} />
    </div>
  );
}

HeadScreen.defaultProps = {
  challenge: '',
}

export default HeadScreen;
