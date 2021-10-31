const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks');
mongoose.Promise = global.Promise;

module.exports = mongoose;