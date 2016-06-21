'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'test';

var events = require('events');
var util = require('util');
var Promise = require('bluebird');
var lodash = require('lodash');
var mongojs = require('mongojs');

events.EventEmitter.defaultMaxListeners = 100;

var World;

World = function World(callback) {
  callback && callback();
};

module.exports.World = World;
