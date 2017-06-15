const isUserExit = require('../dbs/isUserExit-db');

const express = require('express');

const router = express.Router();

router.post('/isUserExit', (req, res)=> {

    isUserExit(req.body, (result)=>{
        if(result.length === 0){
            res.json(false)
        }else{
            res.json(true)
        }
    });
});

module.exports = router;
