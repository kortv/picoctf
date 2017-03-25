import React from 'react';

const ChatLeft = ({
  isSameAuthor,
  isLeftSide,
  author,
  text,
}) => (
  <div className="b-chat_left">
    <div className="b-nameplate">
      {author}
    </div>
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
);

export default ChatLeft;
