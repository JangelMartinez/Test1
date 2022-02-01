window.onload= () => {
	
	const now = new Date();
	console.log(now.toDateString());
	document.getElementById('fecha').innerHTML='[' + now.toDateString() + ']';
	
}
