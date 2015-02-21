var React = require('react');
var Reflux = require("reflux");

var FoodStore = require("../../stores/FoodStore");
var FoodActions = require("../../actions/FoodActions");

var CreateFoodItem = require("./Create.jsx");

var Foods = React.createClass({
  mixins: [Reflux.connect(FoodStore, "foodInfo")],

  getInitialState: function() {
    return {
      adding: false
    };
  },

  componentDidMount: function() {
    FoodActions.load();
  },

  render: function() {
    var foodItems = this.state.foodInfo.foods.map(function(food, index) {
      return (
        <tr key={index}>
          <td>{food.name}</td>
          <td>{food.acceptsTickets ? "Yes" : "No"}</td>
          <td>WIP</td>
        </tr>
      );
    });

    return (
      <section className="food-list">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Resturant Name</th>
                  <th>Accepts Tickets?</th>
                  <th>Price Range</th>
                </tr>
              </thead>
              <tbody>
                {foodItems}
              </tbody>
              <CreateFoodItem />
            </table>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = Foods;
