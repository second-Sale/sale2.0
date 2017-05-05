const login = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/login', (req, res)=> {

    login(req.body, (docs)=> {
        if (docs.length === 0) {
            res.send(false);
        } else {
            if (docs[0].password === req.body.password) {

                req.session.userName = docs[0].name;
                req.session.isLogin = true;

                var Cookies = {};
                req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
                    var parts = Cookie.split('=');
                    Cookies[parts[0].trim()] = ( parts[1] || '' ).trim();
                });

                if (Cookies.user !== req.session.userName) {
                    console.log('user');
                    res.cookie('user', req.session.userName);
                }

                res.send(true);
            } else {
                res.send(false);
            }
        }
    });
});

module.exports = router;