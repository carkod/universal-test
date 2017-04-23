var React = require('react');

module.exports = React.createClass({
    handleClick () {
        alert('first isomorphic app!')
    },
    render() {
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='/style.css' />
                </head>
                <body>
                    <div>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <button onClick={this.handleClick}>Submit</button>
                    </div>
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(this.props)
                    }}/>
                    <script src='/bundle.js' />
                    
                </body>
            </html>
        );
    }
});