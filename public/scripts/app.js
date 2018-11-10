'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'  Info '
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'UBK'
	),
	React.createElement(
		'p',
		null,
		' 23 '
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
