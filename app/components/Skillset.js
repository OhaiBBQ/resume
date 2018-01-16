const React = require('react/addons');

const Skillset = React.createClass({
    skills: function() {
        return this.props.skillset.skills.map((skill) => {
            return (<li key={skill}>{skill}</li>)
        });
    },

    render: function() {
        return (
            <div className="resume__item resume__item-skills">
                <h2>{this.props.skillset.title}</h2>
                <ul>
                    {this.skills()}
                </ul>
            </div>
        );
    }
});

module.exports = Skillset;
