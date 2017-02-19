/**
 * Created by oren on 13/02/2017.
 */
var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User};
// var newUser = new User({
//   email: "elador1@gmail.com"
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user', JSON.stringify(doc,undefined,2))
// }, (e) =>{
//   console.log('Unable to save user: ', e);
// });
