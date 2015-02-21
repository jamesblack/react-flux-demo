var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <section className="row about-us">
        <article className="col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">How to Use</div>
            <div className="panel-body">
              <p>You can see the list of places to eat under the foods link!</p>
              <p>You can view past/current ballots under the ballots link!</p>
              <p>Open the current Ballot and go ahead and place vote for all the places you want to eat.</p>
              <p>This doesn't guarentee we will all go there, but it's better than great harvest right?</p>
            </div>
          </div>
        </article>
      </section>
    );
  }

});

module.exports = About;
