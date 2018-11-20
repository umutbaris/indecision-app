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

/**
 * Arrow functions and event
 */

var count = 0;

var addOne = function addOne() {
	console.log('addOne');
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count : ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne, className: 'button' },
		' +1 '
	),
	React.createElement(
		'button',
		{ onClick: minusOne, className: 'button' },
		' -1 '
	),
	React.createElement(
		'button',
		{ onClick: reset, className: 'button' },
		' reset '
	)
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
