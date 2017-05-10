const isUserExit = require('../dbs/isUserExit-db');

const express = require('express');

const router = express.Router();

router.post('/logOut', (req, res)=> {
    res.send({tag:"logout",isLogin:false,user:''})

});

module.exports = router;
