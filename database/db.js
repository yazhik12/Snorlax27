var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;


mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true});
console.log('connection successful')


var UserSchema = mongoose.Schema({

mongoose.connect('mongodb://localhost/test', {useMongoClient: true}); //TODO: update test once working

mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true}); //TODO: update test once working

console.log('connection successful')

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));



var userSchema = mongoose.Schema({


var UserSchema = mongoose.Schema({

  username: String,
  password: String,
});

var User = mongoose.model('User', UserSchema);



var DiarySchema = mongoose.Schema({
  username: String,
  title: String,

var diarySchema = mongoose.Schema({

var DiarySchema = mongoose.Schema({

  username: String,

  text: String,
  sentiment: String,
});

var Diary = mongoose.model('Diary', DiarySchema);



module.exports.User = User;
module.exports.Diary = Diary;

// var fluffy = new UserDoc({userName: 'fluffy'});
// fluffy.save(function (error, success) {
//   if (error) {
//     console.log('it didnt work db line 33');
//   }
//   console.log('hey Mike it worked :D');
// })



module.exports.UserDoc = UserDoc;
module.exports.DiaryDoc = DiaryDoc;


module.exports.User = User;
module.exports.Diary = Diary;

