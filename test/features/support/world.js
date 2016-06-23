'use strict';

process.env.NODE_ENV = 'bdd';

var events = require('events');
var util = require('util');
var mongojs = require('mongojs');
var lodash = require('lodash');
var request = require('supertest');
var config = require('config');
var World;

World = function World(callback) {
	// this.db = db.collection('Fleet');
    this.request = request("localhost:1339");
    callback && callback() ;
};

module.exports.World = World;
