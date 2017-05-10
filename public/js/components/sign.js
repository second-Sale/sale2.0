import React from "react";
import Nav from '../containers/nav-container'
import Footer from './footer'
import {browserHistory} from 'react-router'


class Sign extends React.Component {
    handleSubmit() {
        var name = this.refs.Username.value.trim();
        var password = this.refs.password.value.trim();
        var confirmPass = this.refs.comfirmPass.value.trim();

        if (name !== "" && password !== "" && confirmPass !== "") {
            if (password !== confirmPass) {
                document.getElementById("warning").innerHTML = "两次密码不一致";
            } else {
                this.props.onInsertUser({name, password});
                document.getElementById("warning").innerHTML = " ";
                browserHistory.push("/login")

            }
        } else {
            document.getElementById("warning").innerHTML = "请填写完整信息";
        }
    }

    isUserExit() {
        var name = this.refs.Username.value.trim();
        console.log(name);
        this.props.isUserExit(name);
    }

    componentDidUpdate() {
        let userExit = this.props.userExit;
        console.log("userExit", typeof (userExit));

        if (userExit) {
            document.getElementById("warning").innerHTML = "用户已存在";
        } else {
            document.getElementById("warning").innerHTML = "";
        }
    }

    render() {
        return <div className="sign-background">
            <Nav/>
            <form >
            <div id="signStyle">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"
                           ref="Username" onBlur={this.isUserExit.bind(this)}/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-eye-close"></i></span>
                    <input type="password" className="form-control" placeholder="Password"
                           aria-describedby="basic-addon1" ref="password"/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-eye-close"></i></span>
                    <input type="password" className="form-control" placeholder="Confirm Password"
                           aria-describedby="basic-addon1" ref="comfirmPass"/>
                </div>
                <br/>
                <div id="warning"><span id="warn">提示</span></div>
                <button type="button" className="btn btn-info" id="button1" aria-label="Left Align"
                        onClick={this.handleSubmit.bind(this)}>
                    <span aria-hidden="true">注册</span>
                </button>
                <button type="reset" className="btn btn-info" id="button2" aria-label="Left Align">
                    <span aria-hidden="true">取消</span>
                </button>
            </div>
            </form>
            <Footer/>
        </div>
    }
}

export default Sign;