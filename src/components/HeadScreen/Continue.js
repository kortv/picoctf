import React from 'react';

const Continue = ({ index, setScreen }) => (
  <div className="b-controls">
    <div className="b-controls_control" onClick={() => { setScreen(+index + 1) }}>
      <div className="b-controls_text" style={{ color: '#00ff5f' }}>
        Continue
      </div>
      <div className="b-controls_icon b-controls_icon--right">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50">
          <path fill="#00ff5f" d="M40.5,29.4c0-0.7-0.4-0.9-1-0.4L24,42.2c-0.3,0.2-0.7,0.2-0.9-0.1l-2.5-3c-0.2-0.3-0.2-0.7,0.1-0.9l13.8-11.8
            c0.3-0.2,0.3-0.6,0-0.8L20.7,13.8c-0.3-0.2-0.3-0.6-0.1-0.9l2.5-3c0.2-0.3,0.6-0.3,0.9-0.1l15.5,13.2c0.5,0.5,1,0.3,1-0.4v-6.2
            c0-0.3,0.3-0.6,0.6-0.6h4.4c0.3,0,0.6,0.3,0.6,0.6v19.2c0,0.4-0.3,0.6-0.6,0.6h-4.4c-0.3,0-0.6-0.3-0.6-0.6V29.4z M25.4,25.2
            c0.5,0.5,0.5,1.2,0,1.6l-18,15.4c-0.3,0.2-0.7,0.2-0.9-0.1l-2.5-3c-0.2-0.3-0.2-0.7,0.1-0.9l13.8-11.8c0.3-0.2,0.3-0.6,0-0.8
            L4.1,13.8c-0.3-0.2-0.3-0.6-0.1-0.9l2.5-3c0.2-0.3,0.6-0.3,0.9-0.1L25.4,25.2z"/>
        </svg>
      </div>
    </div>
  </div>
)

export default Continue;
