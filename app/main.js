const React = require('react/addons');

const { Resume } = require('./components/index');

React.render(new Resume({}), document.getElementsByClassName('resume__react_app')[0]);
