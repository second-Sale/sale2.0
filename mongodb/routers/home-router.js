const getGoods = require('../dbs/getGoods-db');

const express = require('express');

const router = express.Router();

router.post('/getAllGoods', (req, res)=> {

    console.log('home.router');
    getGoods(req.body, (docs)=> {
        console.log(docs)
        res.send(docs)
    })

});

module.exports = router;