const login = require('../dbs/login-db');

const express = require('express');

const router = express.Router();

router.post('/login', (req, res)=> {

    login(req.body, (docs)=>{
        if (docs.length === 0) {
            res.send(false);
        } else {
            if (docs[0].password === req.body.password) {
                res.send(true);
            } else {
                res.send(false);
            }
        }
    });
});

module.exports = router;
