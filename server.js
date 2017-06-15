const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = new express();

app.use(cookieParser());
var sessions = {};
var SESSION_KEY = 'session.id';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use(session({
    secret: 'a',    //
    resave: true,   //每次请求都重新设置session cookie
    saveUninitialized: true,     //无论有没有session cookie，每次请求都设置个session cookie
    cookie: {maxAge: 60 * 1000}   //设置存放 session id 的 cookie 的相关选项
}));


const regist = require('./mongodb/routers/sign-router');
const isUserExit = require('./mongodb/routers/isUserExit-router');
const login = require('./mongodb/routers/login-router');
const logOut = require('./mongodb/routers/logOut-router');
const publish = require('./mongodb/routers/publish-router');
const home = require('./mongodb/routers/home-router');
const upload = require('./mongodb/routers/uploadImage');


app.use('/', regist);
app.use('/', isUserExit);
app.use('/', login);
app.use('/', logOut);
app.use('/', publish);
app.use('/', home);
app.use('/',upload);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;