import React, { Component } from 'react';

class Texts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      texts: this.props.texts,
    };
  }

  render() {
    return (
      <div>
        myApp
      </div>
    );
  }
}

export default Texts;
