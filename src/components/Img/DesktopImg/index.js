import React from 'react';
import { COURSE_PATH } from '../../../constants';

// import desktopimg from './img/desktop.png';
// import desktopimg1 from './img/desktop1.png';

const Img = ({ src }) => {
    return (
        <div className="b-desktop_img">
            <img src={`${COURSE_PATH}${src || "desktop1.png"}`} alt=""/>
        </div>
    );
}

export default Img;
