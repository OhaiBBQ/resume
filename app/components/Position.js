const React = require('react/addons'),
    _ = require('lodash');

const Position = React.createClass({
    accomplishments: function() {
        return this.props.position.accomplishments.map(function(accomplishment) {
            return (<li key={accomplishment}>{accomplishment}</li>)
        });
    },

    header: function() {
        const position = this.props.position;

        return _.compact([position.company, position.title]).join(' - ');
    },

    render: function() {
        const position = this.props.position,
            timeline = position.timeline,
            accomplishments = this.accomplishments(),
            header = this.header();

        return (
            <div className={"resume__item resume__item-" + this.props.color}>
                <h2>{header}
                    <small> {timeline.start} &mdash; {timeline.end === null ? 'present' : timeline.end}</small>
                </h2>

                {position.blurb !== null ? (
                    <span className="resume__position_description">{position.blurb}</span>) : null}

                {accomplishments.length > 0 ? <h4>Accomplishments:</h4> : null}
                {accomplishments.length > 0 ? (<ul>{accomplishments}</ul>) : null }
            </div>
        );
    }
});

module.exports = Position;

