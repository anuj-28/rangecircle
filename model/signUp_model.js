var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var modelschema = new Schema({
    user_name:{
      type: String,
   },
   Password:{
      type: String,
   }
})

module.exports = Login = mongoose.model('signUp', modelschema);

//module.export to export the mongo db schema
//=Login:Just the name of schema
//signup will be thename of name of schema
//model schema:vaiable and passing shema to mongoose.model