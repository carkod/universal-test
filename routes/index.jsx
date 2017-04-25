var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Component = require('../Components/index.jsx');


router.get('*', function(req, res) {
  var props = { title: 'Isomorphic application', description: 'This application renders both on server side and client side with REACT'}
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location:req.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
        var html = ReactDOMServer.renderToString(
          <ReactRouter.RouterContext {...renderProps} 
            createElement={function(Component, renderProps) {
                return <Component {...renderProps} {...props} />;
            }}
            />  
        );
        res.send(html);
    } else {
        res.status(404).send('Not found!')
    }
  }
  );
});

module.exports = router;