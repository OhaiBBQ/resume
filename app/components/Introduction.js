const React = require('react/addons');

const Introduction = React.createClass({
    personalInformation: function() {
        return [
            this.props.information.location,
            this.props.information.phone,
            this.props.information.email
        ].join("<br />");
    },

    render: function() {
        return (
            <div className="resume__introduction">
                <h1 dangerouslySetInnerHTML={{__html: this.props.resume.name}}/>
                <h2 dangerouslySetInnerHTML={{__html: this.props.resume.title}}/>

                <div className="resume__personal_information"
                     dangerouslySetInnerHTML={{__html: this.personalInformation()}}/>
            </div>
        );
    }
});

module.exports = Introduction;
