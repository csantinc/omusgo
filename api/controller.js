'use strict';

var properties = require('../package.json');
var seqgenerator = require('../service/seqGenerator');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    get_sequenceRandom: function(req, res) {
        seqgenerator.generateRandom(req, res, function(err, seq) {
            if (err)
                res.send(err);
            res.json(seq);
        });
    },
    get_sequenceML: function(req, res) {
        seqgenerator.generateML(req, res, function(err, seq) {
            if (err)
                res.send(err);
            res.json(seq);
        });
    },
};

module.exports = controllers;
