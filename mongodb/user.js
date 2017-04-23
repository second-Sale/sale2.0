const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/sale';

const insertUser = function (req, res) {
    const userInfo = req.body;

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection('user');
        const result = collection.insertOne(userInfo);
        console.log("result:", result);
        if (result != " ") {
            res.json(true);
        }
        db.close();
    })
};

const isUserExit = function (req, res) {
    const userName = req.body;

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection('user');
        const result = collection.findOne(userName);
        console.log("result:", result);
        if (result !== " ") {
            res.json(true);
        } else {
            req.json(false);
        }
        db.close();
    })
}

module.exports = {
    insertUser,
    isUserExit
};



