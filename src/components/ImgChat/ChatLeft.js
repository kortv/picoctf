import React from 'react';

const ChatLeft = ({
  isSameAuthor,
  isLeftSide,
  author,
  value,
}) => (
  <div className="b-chat_left">
    <div
      className="b-nameplate"
      style={isSameAuthor ? { visibility: 'hidden' } : {}}
    >
      {author}
    </div>
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  </div>
);

export default ChatLeft;
