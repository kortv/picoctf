import React from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';
import StoryBoard from "../Controls";


import Images from './Images';

const ImgChat = ({ events, index, setScreen }) => {
  let isLeftSide = false;
  let lastSrc = '';
  let isFade = false;
  const storyList = events.map((obj, i) => {
    if (obj.type === 'img') {
      lastSrc = obj.value;
      return null;
    } else if (obj.type === 'fade') {
      isFade = {...obj};
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
      {isFade && <div
        className='fadeIn fade__block'
        style={{
          background: isFade.value || 'white',
          animationDuration: isFade.duration ? `${isFade.duration / 1000}s` : '3s',
        }}
      />}
      <Images src={lastSrc} />
      <div
        className="b-story_board"
        // ref={(e) => this.chat = e}
      >
        {storyList}
      </div>
      <StoryBoard {...{index, setScreen}} />
    </div>
  );
}

ImgChat.defaultProps = {
  events: [],
}

export default ImgChat;
