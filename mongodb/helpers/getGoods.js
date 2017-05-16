const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/sale';

const getGoods = (collect, data, callback)=> {
    console.log("helperssss")
    MongoClient.connect(DB_CONN_STR, (err, db)=> {
        const collection = db.collection(collect);
        collection.find().toArray((err, result)=> {
            callback(result);
        })
        db.close();
    })
};

module.exports = getGoods;