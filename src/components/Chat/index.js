import React from 'react';
import get from 'lodash.get';
import { COURSE_PATH } from '../../constants';

import StoryBoard from "../Controls";

const Chat = ({ events, index, setScreen }) => {
  let isLeftSide = false;
  let lastSrc = '';
  const storyList = events.map((obj, i) => {
    if (obj.type === 'img') {
      lastSrc = obj.value;
      return null;
    } else {
      const isSameAuthor = obj.author === get(events, [i - 1, 'author']);
      isLeftSide = isSameAuthor ? isLeftSide : !isLeftSide

      return isLeftSide ?
        <div className="b-chat_msg_left">
          {obj.value}
        </div> :
        <div className="b-chat_msg_right">
          {obj.value}
        </div>
    }
  })


  return (
    <div className="b-fullscreen_background">
      {/*Chat window*/}
      <div className="b-desktop_img">
        {storyList.length ? <div className="b-desktop_chat">
          <div className="b-chat_header">
            <div className="b-chat_controls">
              <div />
              <div />
              <div />
            </div>
            <div className="b-chat_address">
              To: Robin
          </div>
          </div>
          <div className="b-chat_body">
            {storyList}
          </div>
          <div className="b-chat_footer">
            <div>
              Message...
          </div>
          </div>
        </div> : null}
        <img src={`${COURSE_PATH}${lastSrc || "desktop1.png"}`} alt="" />
      </div>


      <StoryBoard {...{ index, setScreen }} />

      <div className="b-background_yellow"/>
      <div className="b-background_gray"/>
      <div className="b-background_dark-gray"/>
    </div>
  );
};

Chat.defaultProps = {
  events: [],
}

export default Chat;
