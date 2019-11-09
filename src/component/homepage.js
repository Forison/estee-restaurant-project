const main = () => {
	let container = document.createElement('div');
	container.classList.add('container');

	let welcome = document.createElement('div');
	welcome.classList.add('welcome');
	container.appendChild(welcome);
	
	return container
}
document.body.appendChild(main())
export { main as default }