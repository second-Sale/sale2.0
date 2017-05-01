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
    secret: 'a',
    resave: true,
    saveUninitialized: true
}));



const regist = require('./mongodb/routers/sign-router');
const isUserExit = require('./mongodb/routers/isUserExit-router');
const login=require('./mongodb/routers/login-router');

app.use('/', regist);
app.use('/', isUserExit);
app.use('/',login);


app.get('*', (req, res) => {
    "use strict";
res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;