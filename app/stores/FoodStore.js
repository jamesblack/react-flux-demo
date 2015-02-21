var Reflux = require("reflux");

var FoodActions = require("../actions/FoodActions");

var FoodStore = module.exports = Reflux.createStore({

  init: function() {
    this.listenTo(FoodActions.load, this.onLoad);
    this.listenTo(FoodActions.load.success, this.onLoadSuccess);
    this.listenTo(FoodActions.load.failure, this.onLoadFailure);

    this.listenTo(FoodActions.add, this.onAdd);
    this.listenTo(FoodActions.add.success, this.onAddSuccess);
    this.listenTo(FoodActions.add.failure, this.onAddFailure);

    this.state = {
      loading: false,
      saved: true,
      error: false,
      foods: []
    };
  },

  onLoad: function() {
    this.state.loading = true;

    this.trigger(this.state);
  },

  onLoadSuccess: function(foods) {
    this.state.loading = false;
    this.state.foods = foods;

    this.trigger(this.state);
  },

  onLoadFailure: function(error) {
    this.state.loading = false;
    this.state.error = error;

    this.trigger(this.state);
  },

  onAdd: function(food) {
    this.state.foods.push(food);
    this.state.saved = false;

    this.trigger(this.state);
  },

  onAddSuccess: function(food) {
    this.state.saved = true;

    this.trigger(this.state);
  },

  onAddFailure: function(food) {
    this.state.error = true;

    this.trigger(this.state);
  },

  getInitialState: function() {
    return this.state;
  }

});
