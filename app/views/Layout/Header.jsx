var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <header>
        <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">VSTG Food Voter</Link>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/foods">Foods</Link></li>
                <li><Link to="/ballots">Ballot</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
