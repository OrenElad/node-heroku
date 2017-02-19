// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text:"Mongo Re using TRUE!!!"}).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text:"Mongo Re using TRUE!!!"}).then((result) =>{
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) =>{
    console.log(result);
  });
  db.close();
});
