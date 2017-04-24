var React = require('react');


module.exports = React.createClass({
    handleClick() {
     alert('activated isomorph')
    },
    render: function () {
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
            <body>
               <h1>{this.props.title}</h1> 
               <p>{this.props.description}</p> 
               <button onClick={this.handleClick}>Alert button</button>
               <script dangerouslySetInnerHTML={{
                   __html: 'window.PROPS=' + JSON.stringify(this.props)
               }} />
               <script src="/bundle.js" ></script>
           </body>
           </html>
        ); 
    }
});