const React = require('react/addons');

const Blurb = React.createClass({
    render: function() {
        return (
            <div className="resume__blurb" dangerouslySetInnerHTML={{__html: this.props.resume.blurb}}/>
        );
    }
});

module.exports = Blurb;
