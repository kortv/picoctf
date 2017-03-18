import React, { Component } from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

class Texts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
    };
  }

  componentDidMount() {
    this.props.texts.forEach((obj) => {
      const [minuts, sec] = obj.time.split(':');
      setTimeout(() => {
        this.setState({
          texts: [...this.state.texts, obj],
        })
      }, (minuts * 60000 )+ (sec * 1000))
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.chat.scrollTop = this.chat.scrollHeight
  }
  

  render() {
    const { texts } = this.state;
    let isLeftSide = false;
    const storyList = texts.map((obj, index) => {
      const isSameAuthor = obj.author === get(texts, [index - 1, 'author']);
      isLeftSide = isSameAuthor ? isLeftSide : !isLeftSide

      return isLeftSide ?
        <ChatLeft key={index} {...obj} isSameAuthor={isSameAuthor} /> :
        <ChatRight key={index} {...obj} isSameAuthor={isSameAuthor} />
    })
    return (
      <div
        className="b-story_board"
        style={{ overflow: 'auto' }}
        ref={(e) => this.chat = e}
      >
        {storyList}
      </div>
    );
  }
}

export default Texts;
