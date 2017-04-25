var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;

var Layout = React.createClass({
    handleClick: function () {
     alert('activated isomorph')
    },
    render: function () {
        var custom = this.props.custom
        return(
            <html>
                <head>
                    <title>{custom.title}</title>
                </head>
            <body>
               <h1>{custom.title}</h1> 
               <p>{this.props.custom.description}</p> 
               <button onClick={this.handleClick}>Alert button</button>
               {this.props.children}
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
               </ul>
               <script dangerouslySetInnerHTML={{
                   __html: 'window.PROPS=' + JSON.stringify(this.props.custom)
               }} />
               <script src="/bundle.js" ></script>
           </body>
           </html>
        ); 
    }
});

var wrapper = connect(
    function(state) {
        return {custom:state};
    }    
);

module.exports = wrapper(Layout);