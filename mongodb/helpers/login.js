const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/sale';

const login = function (collect, data, callback) {

    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection(collect);
        collection.find(data).toArray((err, result) => {
            callback(result);
        });

        db.close();
    })
};

module.exports = login;