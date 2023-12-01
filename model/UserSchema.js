// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
// username:{type:String, required:true},
// fullName:{type:String, required:true},
// password:{type:String, required:true},
// });
// module.exports = mongoose.model('user',UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
