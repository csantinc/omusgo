//TODO: update import/export to ES6
//import { Note, Scale } from "@tonaljs/tonal";
var tonal = require("@tonaljs/tonal");
var seqParams = require("./seqParams.js");


var randomSequenceGenerator = {
    generateRandomSequence: function(params) {
        var seq = tonal.Scale.get(params.scale).notes;
        return seq;
    }
};

module.exports = randomSequenceGenerator;

