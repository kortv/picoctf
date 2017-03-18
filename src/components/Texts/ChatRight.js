import React from 'react';

const ChatRight = ({
  isSameAuthor,
  isLeftSide,
  author,
  color,
  text,
}) => (
  <div className="b-chat_right"  style={{ color }}>
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span>{text}</span>
    </div>
    <div className="b-nameplate">
      {author}
    </div>
  </div>
);

export default ChatRight;
