// var mongojs = require('mongojs');
// var Promise = require('bluebird');
// var db = mongojs("mongodb://localhost:27017/testCopy");

// var Hooks = function(callback) {
// 	this.Before(function(scenario, callback) {
// 		this.fleet = db.collection('Fleet');
// 		Promise.all([
// 			this.fleet.drop(),
// 			this.fleet.insert({fleetId: "1111", _id: "1111"})
// 		]).then(function() {
// 			callback();
// 		})
// 	});
// };

// module.exports = Hooks;