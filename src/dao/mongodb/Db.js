const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

class Db {
    static singleCase() {
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }
    constructor() {
        this.dbClient = null;
        this.connect();
    }
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                const client = new MongoClient(config.dbUrl, {
                    useUnifiedTopology: true 
                });
                client.connect((err) => {
                    if (err) {
                        reject(err);
                        return false;
                    }
                    this.dbClient = client.db(config.dbName);
                    resolve(this.dbClient);
                })
            } else {
                resolve(this.dbClient);
            }
        })
    }
}

module.exports = Db.singleCase();