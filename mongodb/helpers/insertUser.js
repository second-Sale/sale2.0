const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/sale';

const insertUser = function (collect, data, callback) {

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection(collect);
        collection.insertOne(data, (err, result)=> {
            callback(err,result);
        });
        db.close();
    })
};

module.exports = insertUser;