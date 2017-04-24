import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducer/index";
import Login from "./components/login";
import Sign from "./containers/sign-container";
import Home from "./components/Home"
import insertUser from "./middlewares/sign-middleware";
import isUserExit from "./middlewares/isUserExit-middlewares"

const createStoreWithMiddleware = applyMiddleware(insertUser,isUserExit)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                    <Route path="/sign" component={Sign}></Route>
                    <Route path="/login" component={Login}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
