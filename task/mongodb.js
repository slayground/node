// basic crud operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

const id = new ObjectID();
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(
    connectionUrl,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to db');
        }

        const db = client.db(database);

        db.collection('users').findOne({ _id: new ObjectID("5cad1da2cbf358dacdb8edb9")}, (error, result) => {
            if (error) {
                return console.log("Can't fetch")
            }

            console.log(result)
        })

        db.collection('users').find({ lastName: 'Pham' }).toArray((error, result) => {
            if (error) {
                return console.log(error)
            }

            console.log(result)
        });

        db.collection('tasks').find({ completed: false}).toArray((error, result) => {
            if (error) {
                return console.log(error)
            }

            console.log(result)
        })
    }
);
