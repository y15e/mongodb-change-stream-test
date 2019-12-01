"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb = require("mongodb");
const dbName = 'stream-test';
const mongoUrl = 'mongodb://localhost:27017/' + dbName;
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const MongoClient = mongodb.MongoClient;
const client = new MongoClient(mongoUrl, mongoOptions);
async function connect() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('items');
        const changeStreamIterator = collection.watch();
        const next = await changeStreamIterator.next();
        console.log(next);
    }
    catch (err) {
        console.dir(err);
    }
}
connect();
