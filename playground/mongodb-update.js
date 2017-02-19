// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var collection = db.collection('Users');

  //findOneAndUpdate
  collection.findOneAndUpdate({
    _id: new ObjectID('582af8cee4762300a4e055c6')
  },{
    $set:{
      name: 'Jhonson'
    },
    $inc:{
      age: -32
    }
  },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
  db.close();db.collection('Todos')
});
