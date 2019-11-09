import Coffee from './gifs/vapourtea.gif';
const main = () => {
	let container = document.createElement('div');
	container.classList.add('container');

	let welcome = document.createElement('div');
	welcome.classList.add('welcome');
	container.appendChild(welcome);

	const welcomePhoto = new Image();
	welcomePhoto.classList.add('imgFluid');
	welcomePhoto.src = Coffee;
	welcome.appendChild(welcomePhoto);

	const bottom = document.createElement('h3');
	bottom.innerHTML = "Eat good, Eat healthy !!!"
	container.appendChild(bottom);
	bottom.classList.add('bottom');

	return container
}
document.body.appendChild(main())
export { main as default }