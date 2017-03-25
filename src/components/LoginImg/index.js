import React, { Component } from 'react';

import loginImg from '../../img/login.png';

class LoginImg extends Component {

    render() {
        return (
            <div className='b-login_img'>
                <img src={loginImg} alt=""/>
            </div>
        );
    }
}

export default LoginImg;
