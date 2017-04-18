import React from "react";
import Nav from './nav';

class Sign extends React.Component {
    handleSubmit() {
        var name = this.refs.Username.value.trim();
        var password = this.refs.password.value.trim();
        // var confirmPass = this.refs.comfirmPass.value.trim();

        this.props.onInsertUser({name,password});

    }

    render() {
        return <div>
            <Nav/>
            <div id="signStyle">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i
                        className="glyphicon glyphicon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" ref="Username"/>
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
                <button type="button" className="btn btn-info" id="button1" aria-label="Left Align"
                        onClick={this.handleSubmit.bind(this)}>
                    <span aria-hidden="true">注册</span>
                </button>
                <button type="button" className="btn btn-info" id="button2" aria-label="Left Align">
                    <span aria-hidden="true">取消</span>
                </button>
            </div>
        </div>
    }
}

export default Sign;