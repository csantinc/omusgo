//TODO: update import/export to ES6
//import { Note, Scale } from "@tonaljs/tonal";
var tonal = require("@tonaljs/tonal");
var seqParams = require("./seqParams.js");


var randomSequenceGenerator = {
    seq: [],
    generateRandomSequence: function(params) {
        //TODO implement here generation code
        var time=0;
        console.log(`Seq length: ${params.len}`);
        while(time < params.len)
        {
            var duration=getRandomDuration(params.grid);
            var pitch=getRandomPitch(params.scale);
            console.log(`Pitch: ${pitch}, Duration: ${duration}, StartTime: ${time}, EndTime: ${time+duration} `);
            time+=duration;
        }
        return this.seq;
    }
};

function getRandomPitch (scale){
    var notes = tonal.Scale.get(scale).notes;
    //let's give some space to silence
    notes.push(" ");
    var randomIndex=Math.floor(Math.random() * Math.floor(notes.length));
    return notes[randomIndex];
};

function getRandomDuration (grid) {
    //TODO Think seriously about this implementation
    var durArray=[1]
    for (i=0;i<grid;i++){
        durArray.push(durArray[i]/2);
    }
    var randomIndex=Math.floor(Math.random() * Math.floor(durArray.length));
    return durArray[randomIndex];

};

module.exports = randomSequenceGenerator;

