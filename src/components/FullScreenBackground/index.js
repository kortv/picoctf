import React, { Component } from 'react';

import LoginImg from './../LoginImg/index';
import DesktopImg from './../DesktopImg/index';

class FullScreenBackground extends Component {

    render() {
        return (
            <div className='b-fullscreen_background'>

                {/*<LoginImg />*/}
                <DesktopImg />

                <div className="b-background_yellow"/>
                <div className="b-background_gray"/>
                <div className="b-background_dark-gray"/>
            </div>
        );
    }
}

export default FullScreenBackground;
