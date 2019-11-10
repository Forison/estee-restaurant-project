import Coffee from './gifs/vapourtea.gif';
import Classic from './images/classic.jpg';
import Desert from './images/desert.jpg';
import Drink from './images/drinks.jpg';
import Meal from './images/meal.jpg';
import Sandwich from './images/sandwich.jpg';
import Cleaning from './images/cleaning-restaurant-kitchen.jpg';

let images = [Cleaning, Classic, Desert, Drink, Meal, Sandwich]

const main = () => {
	let container = document.createElement('div');
	container.classList.add('container');
	
	let bar = document.createElement('div');
	bar.classList.add('bar');
	container.appendChild(bar);

	let containerImgWrap = new Image();
	container.appendChild(containerImgWrap)
	containerImgWrap.src = Cleaning;
	containerImgWrap.classList.add('mainImg');


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

	let nextAndPrev = document.createElement('div');
	bar.appendChild(nextAndPrev);
	nextAndPrev.classList.add('nextAndPrev');
	let prevPhoto = document.createElement('a');
	prevPhoto.classList.add('prev');
	let nextPhoto = document.createElement('a');
	nextPhoto.classList.add('next');
	nextAndPrev.appendChild(nextPhoto);
	nextAndPrev.appendChild(prevPhoto);

	return container
}
document.body.appendChild(main())
export { main as default }