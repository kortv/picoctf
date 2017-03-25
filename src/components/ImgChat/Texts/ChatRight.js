import React from 'react';

const ChatRight = ({
  isSameAuthor,
  isLeftSide,
  author,
  text,
}) => (
  <div className="b-chat_right">
    <div className="b-chat_bubble">
      <div className="b-talk"></div>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
    <div className="b-nameplate">
      {author}
    </div>
  </div>
);

export default ChatRight;
