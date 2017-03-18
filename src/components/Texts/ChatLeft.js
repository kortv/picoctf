import React from 'react';

const ChatLeft = ({
  isSameAuthor,
  isLeftSide,
  author,
  color,
  text,
}) => (
  <div className="b-chat_left" style={{ color }}>
    <div className="b-nameplate">
      {author}
    </div>
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span>
        {text}
      </span>
    </div>
  </div>
);

export default ChatLeft;
