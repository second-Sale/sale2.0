const express = require('express');
const publish = require('../dbs/publish-db')

const router = express.Router();

router.post('/publish', (req, res)=> {
    console.log(req.body)

    publish(req.body, (err, result)=> {
        if (err) {
            res.json(false);
        } else {
            res.json(true);
        }
    })
});

module.exports = router;
