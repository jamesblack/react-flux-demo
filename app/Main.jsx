var React = require("react");
var Router = require("react-router");

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Header = require("./views/Layout/Header.jsx");

var About = require("./views/Static/About.jsx");
var Ballot = require("./views/Ballot/Ballot.jsx");
var Foods = require("./views/Foods/Foods.jsx");

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <Header />
        <main className="container-fluid">
          <RouteHandler />
        </main>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={About} />
    <Route path="/ballots" handler={Ballot} />
    <Route path="/foods" handler={Foods} />
  </Route>
  );

module.exports = routes;
