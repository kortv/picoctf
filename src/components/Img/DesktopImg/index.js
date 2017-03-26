import React from 'react';

// import desktopimg from './img/desktop.png';
// import desktopimg1 from './img/desktop1.png';

const Img = ({ src }) => {
    return (
        <div className="b-desktop_img">
            <img src={src || "img/desktop1.png"} alt=""/>
        </div>
    );
}

export default Img;
