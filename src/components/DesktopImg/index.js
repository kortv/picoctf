import React, { Component } from 'react';

import desktopImg from '../../img/desktop.png';

class DesktopImg extends Component {

    render() {
        return (
            <div className='b-desktop_img'>
                <img src={desktopImg} alt=""/>
            </div>
        );
    }
}

export default DesktopImg;
