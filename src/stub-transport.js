'use strict';

var packageData = require('../package.json');
var EventEmitter = require('events').EventEmitter;
var utillib = require('util');

module.exports = function(options) {
    return new StubTransport(options);
};

function StubTransport(options) {
    EventEmitter.call(this);
    this.options = options || {};
    this.name = 'Delayed';
    this.version = packageData.version;
}
utillib.inherits(StubTransport, EventEmitter);

StubTransport.prototype.send = function(mail, callback) {
  callback(mail);
};
