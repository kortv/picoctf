import React, { Component } from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

class Texts extends Component {

  componentDidUpdate() {
    this.chat.scrollTop = this.chat.scrollHeight
  }

  render() {
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
      <div
        className="b-story_board"
        ref={(e) => this.chat = e}
      >
        {storyList}
      </div>
    );
  }
}

export default Texts;
