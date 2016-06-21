'use strict';

var Promise = require('bluebird');
var async = require('async');
var lodash = require('lodash');
var assert = require('chai').assert;
var superagent = require('superagent');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^an already running restapi service$/, function (callback) {
    var self = this;
    callback && callback();
  });
};