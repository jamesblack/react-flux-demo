var express = require('express');
var router = express.Router();
require("node-jsx").install({extension: '.jsx'});
var React = require("react");
var ReactRouter = require("react-router");


router.get("*", function(req, res, next) {
  var application = require("../app/Main.jsx");
  var props = {};
  ReactRouter.run(application, req.path, function(Handler, state) {
    var html = React.renderToString(React.createElement(Handler, props));
    res.render('index', {html: html, props: props});
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
