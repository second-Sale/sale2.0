import React, {Component} from "react";
import { browserHistory } from 'react-router'

const Nav = React.createClass({
    Login(){
        browserHistory.push("/login")
    },
    Sign(){
        browserHistory.push('/sign')
    },
    render: function () {
        return <div id="navStyle">
            <span onClick={this.Login.bind(this)} className="navButton" >登录</span>
            <span onClick={this.Sign.bind(this)} className="navButton2">注册</span>
        </div>

    }
});
export default Nav;