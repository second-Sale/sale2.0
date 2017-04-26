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
        collection.find(userName).toArray(function (err, docs) {
            if (docs.length === 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });

        db.close();
    })
};

const checkUser = function (req, res) {
    const name = req.body.name;
    const password = req.body.password;

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection('user');
        collection.find({name: name}).toArray(function (err, docs) {
            console.log(docs);
            if (docs.length === 0) {
                res.send(false);
            } else {
                if (docs[0].password === password) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            }
        })
    })
}

const checkUser = function (req, res) {
    const name = req.body.name;
    const password = req.body.password;

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection('user');
        collection.find({name: name}).toArray(function (err, docs) {
            console.log(docs);
            if (docs.length === 0) {
                res.send(false);
            } else {
                if (docs[0].password === password) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            }
        })
    })
}

module.exports = {
    insertUser,
    isUserExit,
    checkUser
};



