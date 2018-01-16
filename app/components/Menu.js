const React = require('react/addons');

const Menu = React.createClass({
    print: function() {
        window.print();
    },

    render: function() {
        return (
            <div className="resume__menu">
                <button onClick={this.print}>Print</button>
                <a href="https://github.com/ohaibbq/resume">View on GitHub</a>
            </div>
        );
    }
});

module.exports = Menu;
