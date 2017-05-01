const insertUser = require('../dbs/sign-db');

const express = require('express');

const router = express.Router();

router.post('/regist', (req, res)=> {

    insertUser(req.body, (err) => {
        if (err) {
            res.json(false)
        }else{
            res.json(true)
        }
    });
});

module.exports = router;
