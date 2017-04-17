import React from "react";
import Nav from "./nav"

class Login extends React.Component {
    render() {
        return <div>
            <Nav/>
            <div id="signStyle">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-user" ></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-eye-close" ></i></span>
                    <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <br/>
                <button type="button" className="btn btn-info" id="button1" aria-label="Left Align">
                    <span  aria-hidden="true">登陆</span>
                </button>
                <button type="button" className="btn btn-info" id="button2" aria-label="Left Align">
                    <span  aria-hidden="true">取消</span>
                </button>
            </div>
        </div>
    }
}

export default Login;