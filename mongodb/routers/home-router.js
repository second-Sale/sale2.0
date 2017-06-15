const getGoods = require('../dbs/getGoods-db');

const express = require('express');

const router = express.Router();

router.post('/getAllGoods', (req, res)=> {

    getGoods(req.body, (docs)=> {
        res.send(docs)
    })

});

module.exports = router;