var lodash = require('lodash');
var chai = require('chai');
var assert = chai.assert;
var Promise = require('bluebird');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/testCopy");
var FleetModel = require("./../../../libs/models/fleet.js");
module.exports = function() {

    this.World = require('../support/world.js').World;

    this.Given(/^a list of fleets$/, function(table, callback) {
        var self = this;
        var fleets = table.hashes();
        FleetModel.remove({})
            .then(function() {
                return FleetModel.create(fleets);
            }).then(function() {
                callback();
            }).catch(function(err) {
                callback(err);
            })
    });

    this.When(/^I send a request to API service, to get fleet with id (\d+)$/, function(arg1, callback) {
        var self = this;
        self.request
            .post("/api/fleet/getinfo")
            .send({
                "fleetId": arg1
            })
            .end(function(err, res) {
                if (err) callback(err);
                self.result = res.body.response;
                callback();
            })
    });

    this.Then(/^I get a JSON object with id (\d+)$/, function(arg1, callback) {
        var self = this;
        assert.equal(self.result.fleetId, arg1);
        callback();
    });
}