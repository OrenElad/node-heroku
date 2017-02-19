/**
 * Created by oren on 13/02/2017.
 */
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};
// var newTodo = new Todo({
//   text: '   Edit the second video    '
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Saved todo', JSON.stringify(doc,undefined,2))
// }, (e) =>{
//   console.log('Unable to save todo: ', e);
// });
