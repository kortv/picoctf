import React from 'react';

import LoginImg from './LoginImg'
import DesktopImg from './DesktopImg'
import StoryBoard from "../Controls";

const Img = (props) => {

  return (
    <div className="b-fullscreen_background">

        {/*<LoginImg />*/}
        <DesktopImg />
        <StoryBoard/>

        <div className="b-background_yellow"/>
        <div className="b-background_gray"/>
        <div className="b-background_dark-gray"/>
    </div>
  );
}

export default Img;
