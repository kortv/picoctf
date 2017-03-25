import React from 'react';

import Images from './Images';
import Texts from './Texts';

const ImgChat = (props) => {
  const {
    images,
    texts,
  } = props;

  return (
    <div className='app'>
    IMG CHAT
      {(images && images.length) ? <Images images={images} /> : null}
      {(texts && texts.length) ? <Texts texts={texts} /> : null}
    </div>
  );
}

export default ImgChat;
