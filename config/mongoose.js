var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);


mongoose.connect('mongodb://localhost:27017/ultimate', { useNewUrlParser: true }, function (err) {
// mongoose.connect('mongodb://mongodb/ultimate', { useNewUrlParser: true }, function (err) {
    if (err) return console.error(err);
    console.log('connection successed to mongoDB>>> ultimate');
});
module.exports = { mongoose };
