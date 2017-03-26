import React from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

import Images from './Images';
// import Texts from './Texts';

const ImgChat = (props) => {
  const {
    images,
    texts,
  } = props;

  const { events } = this.props;
  let isLeftSide = false;
  const storyList = events.map((obj, index) => {
    const isSameAuthor = obj.author === get(events, [index - 1, 'author']);
    isLeftSide = isSameAuthor ? isLeftSide : !isLeftSide

    return isLeftSide ?
      <ChatLeft key={index} {...obj} isSameAuthor={isSameAuthor} /> :
      <ChatRight key={index} {...obj} isSameAuthor={isSameAuthor} />
  })

  return (
    <div className='b-wrapper'>
    IMG CHAT
      {(images && images.length) ? <Images images={images} /> : null}
    {/*(texts && texts.length) ? <Texts texts={texts} /> : null*/}
    <div
      className="b-story_board"
      ref={(e) => this.chat = e}
    >
      {storyList}
    </div>
    </div>
  );
}

export default ImgChat;
