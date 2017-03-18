import React, { Component } from 'react';
import img from './img/story.png';

class StoryImg extends Component {
    render() {
        return (
            <div className="b-story_img">
                <img src={img} alt=""/>
            </div>
        );
    }
}

export default StoryImg;
