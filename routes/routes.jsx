var React = require('react');
var ReactRouter = require('react-router');


function createElement(Component, props) {
  if (typeof window === 'object') {
  return <Component {...props} {...window.PROP} />;
  }
}


module.exports = (
  <ReactRouter.Router history={ReactRouter.browserHistory} createElement={createElement}>
    <ReactRouter.Route path='/' component={require('../Components/index.jsx')}>
    </ReactRouter.Route>
  </ReactRouter.Router>
)