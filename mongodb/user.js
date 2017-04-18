const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/sale';

const insertUser = function (req,res) {
    const userInfo = req.body;
    console.log("req.body",userInfo);

    MongoClient.connect(DB_CONN_STR,(err, db)=> {
        const collection = db.collection('user');
        const result = collection.insertOne(userInfo);
        console.log("result:",result);
        res.json(result);
        db.close();
    })
};

module.exports = {
    insertUser
};



