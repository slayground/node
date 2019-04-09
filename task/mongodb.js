// basic crud operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(
    connectionUrl,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to db');
        }

        const db = client.db(database);

        // db.collection('users').insertOne(
        //     {
        //         firstName: 'Duy',
        //         lastName: 'Pham'
        //     },
        //     (error, result) => {
        //         if (error) {
        //             return console.log(error)
        //         }
        //         console.log(result.ops)
        //     }
        // );

        db.collection('users').insertMany([
            {
                firstName: 'Dylan',
                lastName: 'Field'
            }, {
                firstName: 'Evan',
                lastName: 'Wallace'
            }
        ], (error, result) => {
            if (error) {
                return console.log(error)
            }

            console.log(result)
        })

        db.collection('tasks').insertMany([
            {
                desc: 'Learn Swift',
                completed: false
            }, {
                desc: 'Read Disrupted',
                completed: true
            }, {
                desc: 'Finish Schemango',
                completed: false
            }
        ], (error, result) => {
            if (error) {
                return console.log(error)
            }

            console.log(result.ops)
        })
    }
);
