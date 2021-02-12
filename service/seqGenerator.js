//TODO: update import/export to ES6
var randomGenerator = require("./randomSequenceGenerator.js");
var seqParams = require("./seqParams.js");
var seq;
var params;


var seqGenerator = {
    generateRandom: function(req, res, next) {
        params= new seqParams(req.params.length,req.params.scale,req.params.grid, req.params.format);
        seq = randomGenerator.generateRandomSequence(params);
        res.send(seq);  
    },

};


module.exports = seqGenerator;
