var mongoose     = require('mongoose');
/*var Schema       = mongoose.Schema;*/
var ClassifiedSchema   = new mongoose.Schema({
    title: String,
    description: String,
    occasion : String,
    category : String,
    location: String,
    image: String,
    quantiy: String
});
module.exports = mongoose.model('Classified', ClassifiedSchema);