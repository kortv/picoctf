import React from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

import Images from './Images';
// import Texts from './Texts';

const ImgChat = ({ events, index, setScree }) => {
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
        <ChatLeft key={i} {...obj} isSameAuthor={isSameAuthor} /> :
        <ChatRight key={i} {...obj} isSameAuthor={isSameAuthor} />
    }
  })

  return (
    <div className='b-wrapper'>
      <Images src={lastSrc} />
    {/*(texts && texts.length) ? <Texts texts={texts} /> : null*/}
    <div
      className="b-story_board"
      // ref={(e) => this.chat = e}
    >
      {storyList}
    </div>
    </div>
  );
}

export default ImgChat;
