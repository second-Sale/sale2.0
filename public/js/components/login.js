import React from "react";
import Nav from "./nav"
import {browserHistory} from 'react-router'


class Login extends React.Component {
    loginSubmit() {
        var name = this.refs.userName.value.trim();
        var password = this.refs.password.value.trim();
        this.props.loginUser({name, password});
    }

    componentDidUpdate() {
        var checkUser = this.props.checkUser;
        console.log("checkuser", checkUser)
        if (checkUser === false) {
            document.getElementById("warning").innerHTML = "用户或密码错误";
        } else {
            browserHistory.push("/");
        }
    }

    render() {
        return <div>
            <Nav/>
            <form>
                <div id="signStyle">
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username"
                               aria-describedby="basic-addon1" ref="userName"/>
                    </div>
                    <br/>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-eye-close"></i></span>
                        <input type="password" className="form-control" placeholder="Password"
                               aria-describedby="basic-addon1" ref="password"/>
                    </div>
                    <br/>
                    <br/>

                    <div id="warning"><span id="warn">提示</span></div>

                    <button type="button" className="btn btn-info" id="button1" aria-label="Left Align">
                        <span aria-hidden="true" onClick={this.loginSubmit.bind(this)}>登陆</span>
                    </button>
                    <button type="reset" className="btn btn-info" id="button2" aria-label="Left Align">
                        <span aria-hidden="true">取消</span>
                    </button>
                </div>
            </form>
        </div>
    }
}

export default Login;