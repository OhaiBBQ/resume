const React = require('react/addons');

const Menu = require('./Menu'),
    Introduction = require('./Introduction'),
    Blurb = require('./Blurb'),
    Position = require('./Position'),
    Skillset = require('./Skillset');

const COLORS = ['yellow', 'orange', 'red', 'blue', 'green'];

const Resume = React.createClass({
    componentWillMount: function() {
        this.resume = require('../data/resume.json');
        this.information = require('../data/pii.json');
    },

    getLeftItems: function() {
        return this.resume.skillsets.map((position, index) => {
            return (<Skillset key={index} skillset={position}/>);
        });
    },

    getRightItems: function() {
        return this.resume.positions.map((position, index) => {
            return (<Position color={COLORS[index % COLORS.length]} key={index} position={position}/>);
        });
    },

    render: function() {
        return (
            <div className="resume__container">
                <Menu />
                <Introduction resume={this.resume} information={this.information}/>
                <Blurb resume={this.resume}/>

                <div className="resume__columns">
                    <div className="resume__column resume__column-left">
                        {this.getLeftItems()}
                    </div>
                    <div className="resume__column resume__column-right">
                        {this.getRightItems()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Resume;
