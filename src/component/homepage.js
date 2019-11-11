import Coffee from './gifs/vapourtea.gif';
import Classic from './images/classic.jpg';
import Desert from './images/chickenTigh.jpg';
import Drink from './images/fillUp.jpg';
import Meal from './images/meal.jpg';
import Sandwich from './images/sandwich.jpg';
import Cleaning from './images/cleaning-restaurant-kitchen.jpg';

const images = [Cleaning, Classic, Desert, Drink, Meal, Sandwich];

const main = () => {
	let i = 0;
	const container = document.createElement('div');
	container.classList.add('container');

	const bar = document.createElement('div');
	bar.classList.add('bar');
	container.appendChild(bar);

	const containerImgWrap = new Image();
	container.appendChild(containerImgWrap);
	containerImgWrap.src = images[i];
	containerImgWrap.classList.add('mainImg');


	const welcome = document.createElement('div');
	welcome.classList.add('welcome');
	container.appendChild(welcome);

	const welcomePhoto = new Image();
	welcomePhoto.classList.add('imgFluid');
	welcomePhoto.src = Coffee;
	welcome.appendChild(welcomePhoto);

	const bottom = document.createElement('h3');
	bottom.innerHTML = 'Eat good, Eat healthy !!!';
	container.appendChild(bottom);
	bottom.classList.add('bottom');

	const nextAndPrev = document.createElement('div');
	bar.appendChild(nextAndPrev);
	nextAndPrev.classList.add('nextAndPrev');
	const prevPhoto = document.createElement('a');
	prevPhoto.classList.add('prev');
	const nextPhoto = document.createElement('a');
	nextPhoto.classList.add('next');
	nextAndPrev.appendChild(nextPhoto);
	nextAndPrev.appendChild(prevPhoto);

	nextPhoto.addEventListener('click', () => {
		i === images.length - 1 ? i = 0 : i += 1;
		containerImgWrap.src = images[i];
	});
	prevPhoto.addEventListener('click', () => {
		i < 1 ? i = images.length - 1 : i -= 1;
		containerImgWrap.src = images[i];
	});
	return container;
};
document.body.appendChild(main());
export { main as default };