import React from 'react';
import Controls from './../Controls'

const HeadScreen = (props) => {

  return (
    <div className="b-desktop_img">
        <img src="img/challenge.png" alt=""/>
        {/*<img src="img/scheme.png" alt=""/>*/}

        <div className="b-centered_text">
            <div>master challenge</div>
            <div>1</div>
        </div>

        <Controls />
    </div>
  );
}

export default HeadScreen;
