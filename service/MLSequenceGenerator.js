//TODO: update import/export to ES6
//import { Note, Scale } from "@tonaljs/tonal";
var tonal = require("@tonaljs/tonal");
var seqParams = require("./seqParams.js");



var MLSequenceGenerator = {
    generateMLSequence: function(params) {
        //TODO implement here generation code
        var seq = tonal.Scale.get(params.scale).notes;
        return seq;
    }
};

module.exports = MLSequenceGenerator;

