const mongoose = require('mongoose');
const {Schema} = mongoose;

const URLSchema = new Schema({
  originalUrl: String,
  shortUrl: String
},{timestamps: true}); //will place a timestamp
const ModelClass = mongoose.model("urlschema",URLSchema);
module.exports = ModelClass;
