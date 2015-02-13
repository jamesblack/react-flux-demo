var React = require("react");
var Router = require("react-router");

var application = require("../../app/Main.jsx");

Router.run(application, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
