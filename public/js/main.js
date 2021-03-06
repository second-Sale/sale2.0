import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducer/index";
import Login from "./containers/login-container";
import Sign from "./containers/sign-container";
import Home from "./containers/home-container";
import Publish from "./containers/pubilsh-containers";
import insertUser from "./middlewares/sign-middleware";
import isUserExit from "./middlewares/isUserExit-middlewares";
import login from './middlewares/login-middlewares';
import logOut from './middlewares/logOut-middleware';
import publish from './middlewares/publish-middleware';
import showHome from './middlewares/Home-middlewares'

const createStoreWithMiddleware = applyMiddleware(insertUser,isUserExit,login,logOut,publish,showHome)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                    <Route path="/sign" component={Sign}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/publish" component={Publish}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
