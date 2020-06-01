//using app.js 
module.exports= function(app){
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mongoose= require('mongoose');
mongoose.connect('mongodb+srv://anuj:anuj123@cluster0-soll9.mongodb.net/rangecircle?retryWrites=true&w=majority')
.then(() => console.log('database Connected')).catch(error => console.log(error));
// mongoose.connect('mongodb+srv://test:test123@cluster0-tdord.mongodb.net/Elearning?retryWrites=true&w=majority')
// .then(() => console.log('database Connected')).catch(error => console.log(error));

}
