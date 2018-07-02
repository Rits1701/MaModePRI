var mongoose = require('mongoose');
var Classified = mongoose.model('Classified');

module.exports.createClassified = function(req, res) {

  var classified = new Classified();

  classified.name = req.body.name;
  classified.category = req.body.category;
  classified.tag = req.body.tag;
  classified.description = req.body.descritpion;
  classified.color = req.body.color;
  classified.location = req.body.location;

  classified.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Ad Created !' })
    })
};

/*module.exports.getClassified = function(req, res) {
  Classified.findAll(function (err, classified) {
        if (err) {
        	console.log(message: 'error');
            res.send(err);
        }
        res.send({message: 'get ads!'});
        res.send(classified);
    });

};*/