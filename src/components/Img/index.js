import React from 'react';
import get from 'lodash.get';

import LoginImg from './LoginImg'
import DesktopImg from './DesktopImg'
import StoryBoard from "../Controls";

const noBackLines = ['scheme.png'];
const isHidden = (src) => noBackLines.some((value) => value === src);

const Img = ({ events, index, setScreen }) => {
  const src = get(events, [events.length - 1, 'value'])
  const isShowen = !isHidden(src);
  return events.length ? (
    <div className="b-fullscreen_background">

        {/*<LoginImg />*/}
        <DesktopImg src={src} />
        <StoryBoard {...{ index, setScreen }} />

        {isShowen && <div className="b-background_yellow" />}
        {isShowen && <div className="b-background_gray" />}
        {isShowen && <div className="b-background_dark-gray" />}
    </div>
  ) : null;
}

Img.defaultProps = {
  events: [],
}

export default Img;
