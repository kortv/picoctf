import React, { Component } from 'react';
import get from 'lodash.get';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

const defaultTexts = [{
    author: "Gretchen",
    color: "#b659f6",
    time: "0:0",
    text: `<span>(Ah, there's my lift.)</span>
      <span>(Sweet, it's a self-driving one!)</span>
      <span>(I've always wanted to go in one of these.)</span>`
  }, {
    author: "Haskell",
    color: "#a8db99",
    time: "0:0",
    text: "Fancy meeting you here."
  }]

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
    const storyList = [...defaultTexts, ...texts].map((obj, index) => {
      const isSameAuthor = obj.author === get(texts, [index - 1, 'author']);
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
