console.log('App.js is running!');

// JSX - JavaScript XML
	var template = ( 
<div>
	<h1>Indecision App</h1> 
	<p>  Info </p>
</div> 
);

/**
 * Arrow functions and event
 */

let count = 0;

const addOne = () => {
	console.log('addOne');
}

const minusOne = () => {
	console.log('minusOne');
}

const reset = () => {
	console.log('reset');
}	
const templateTwo = (
<div>
	<h1>Count : {count}</h1> 
	<button onClick={(addOne)} className="button"> +1 </button>
	<button onClick={(minusOne)} className="button"> -1 </button>
	<button onClick={(reset)} className="button"> reset </button>
</div> 


);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);