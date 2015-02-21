var Reflux = require("reflux");

var FoodService = require("../services/FoodService");

var Actions = module.exports = Reflux.createActions({
  "load": {children: ["success", "failure"]},
  "add": {children: ["success", "failure"]}
});

Actions.add.listen(function(food) {
  FoodService.add()
    .then(this.success)
    .catch(this.failure);
});

Actions.load.listen(function() {
  FoodService.all()
    .then(this.success)
    .catch(this.failure);
});
