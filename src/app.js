console.log('App.js is running!');

// JSX - JavaScript XML
var template = ( 
<div>
	<h1>Indecision App</h1> 
	<p>  Info </p>
</div> 
);

var templateTwo = (
<div>
	<h1>UBK</h1> 
	<p> 23 </p>
</div> 
);

	
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
