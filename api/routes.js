'use strict';

var controller = require('./controller');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
        //length: amount of notes
        //scale: self-explanatory, insn't it?
        //grid: midi grid to use TODO:define
        //format: midi value or musical notation
    app.route('/sequenceRandom/:length/:scale/:grid/:format')
        .get(controller.get_sequenceRandom);
    app.route('/sequenceML/:length/:scale/:grid/:format')
        .get(controller.get_sequenceML);
};