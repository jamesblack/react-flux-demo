var React = require("react");

var Header = React.createClass({
  getInitialState: function() {
    return {
      test: 0,
    };
  },

  onClick: function() {
    this.setState({
      test: this.state.test + 1
    });
  },

  render: function() {
    return (
      <div onClick={this.onClick} className="Header">Hello - {this.state.test}!</div>
    );
  }
});

module.exports = Header;
