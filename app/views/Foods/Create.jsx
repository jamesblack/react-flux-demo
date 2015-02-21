var React = require('react/addons');
var classSet = React.addons.classSet;

var FoodActions = require("../../actions/FoodActions");

var CreateFood = React.createClass({

  getInitialState: function() {
    return {
      adding: false,
      error: false
    };
  },

  onCreateClicked: function() {
    if (this.state.adding) {
      var name = this.refs.name.getDOMNode();
      var acceptsTickets = this.refs.acceptsTickets.getDOMNode();
      var priceRange = this.refs.priceRange.getDOMNode();

      console.log("Adding Food Item");
      console.log("Name:", name.value);
      console.log("AcceptsTickets:", acceptsTickets.checked);
      console.log("PriceRange:", priceRange.value);

      if (name.value.length <= 0) return this.setState({error: true});
      FoodActions.add({name: name.value, acceptsTickets: acceptsTickets.checked});
      this.setState({error: false, adding: false});

    } else {
      this.setState({
        adding: true
      });
    }

  },

  onCancelClicked: function() {
    this.setState({
      adding: false
      });
  },

  render: function() {
    if (this.state.adding) {
      return (
        <tfoot>
          <tr>
            <td className={classSet({"has-error": this.state.error})}><input className="form-control" type="text" ref="name" /></td>
            <td><input type="checkbox" ref="acceptsTickets" /></td>
            <td>
              <select ref="priceRange">
                <option value="$">$5 - $10</option>
                <option value="$$">$10 - $15</option>
                <option value="$$$">$15 - $20</option>
                <option value="$$$$">$20 - $25</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan="3">
              <button onClick={this.onCreateClicked} type="button" className="btn btn-primary ">Create Food Item</button>
              &nbsp;
              &nbsp;
              &nbsp;
              <button onClick={this.onCancelClicked} type="button" className="btn btn-danger">Cancel</button>
            </td>
          </tr>
        </tfoot>
      );
    } else {
      return (
        <tfoot>
          <tr>
            <td className="text-center" colSpan="3">
              <button onClick={this.onCreateClicked} type="button" className="btn btn-primary">Create Food Item</button>
            </td>
          </tr>
        </tfoot>
      );
    }
  }

});

module.exports = CreateFood;
