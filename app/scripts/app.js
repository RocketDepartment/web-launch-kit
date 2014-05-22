/** @jsx React.DOM */
var vendor = require('./vendor');
var Backbone = vendor.exoskeleton;
var React = vendor.react;
var _ = vendor.lodash;

var Welcome = React.createClass({
    render: function(){
        return (
            <div className="welcome">
                <h1>Welcome to Rocket Department Inc. Sytem Ops</h1>
                <p>This is a base NodeJS application built for speed and performance.</p>
            </div>
        );
    }
});

React.renderComponent(<Welcome/>, document.getElementById('welcome'));