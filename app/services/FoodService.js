var Promise = require("bluebird");
var request = require("superagent");

exports.all = function() {
  return new Promise(function(resolve, reject) {
    resolve([
      {name: "Tacobell", "acceptsTickets": false},
      {name: "Buffalo Wild Wings", "acceptsTickets": false},
      {name: "Zupas", "acceptsTickets": true}
    ]);
  });
};

exports.add = function(food) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};
