import React from 'react';

import DesktopImg from './../Img/DesktopImg';
import StoryBoard from "../Controls";

const Chat = (props) => {

  return (
    <div className="b-fullscreen_background">
        <DesktopImg />
        <StoryBoard/>



        <div className="b-background_yellow"/>
        <div className="b-background_gray"/>
        <div className="b-background_dark-gray"/>
    </div>
  );
};

export default Chat;
