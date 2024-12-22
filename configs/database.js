const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
// db.url = 'mongodb://user:password@db:27017/carrofacildb?authSource=admin'
db.url = 'mongodb://127.0.0.1:27017/carrofacildb'

module.exports = db;