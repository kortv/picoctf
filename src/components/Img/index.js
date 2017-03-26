import React from 'react';
import get from 'lodash.get';

import LoginImg from './LoginImg'
import DesktopImg from './DesktopImg'
import StoryBoard from "../Controls";

const Img = ({ events, index, setScreen }) => {

  return events.length ? (
    <div className="b-fullscreen_background">

        {/*<LoginImg />*/}
        <DesktopImg src={get(events, [events.length - 1, 'value'])} />
        <StoryBoard {...{ index, setScreen }} />

        <div className="b-background_yellow"/>
        <div className="b-background_gray"/>
        <div className="b-background_dark-gray"/>
    </div>
  ) : null;
}

Img.defaultProps = {
  events: [],
}

export default Img;
