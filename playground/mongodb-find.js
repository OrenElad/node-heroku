// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("582b0db2a326ed011ab65300")
  // }).toArray().then((docs) => {
  //   console.log('Todos', JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetchtodos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetchtodos', err);
  // });
  db.collection('Todos').find({}).toArray().then((docs) => {
      console.log('Users: ' ,JSON.stringify(docs,undefined,2));
    }, (err) => {
      console.log('Unable to fetchtodos', err);
    });
  // db.collection('Users').find({name:"Yael"}).toArray().then((docs) => {
  //   console.log('Users: ' ,JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetchtodos', err);
  // });

  db.close();
});
