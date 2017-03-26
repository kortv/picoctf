import React from 'react';

const ChatRight = ({
  isSameAuthor,
  isLeftSide,
  author,
  value,
}) => (
  <div className="b-chat_right">
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span dangerouslySetInnerHTML={{ __html: value }} />
    </div>
    <div
      className="b-nameplate"
      style={isSameAuthor ? { visibility: 'hidden' } : {}}
    >
      {author}
    </div>
  </div>
);

export default ChatRight;
