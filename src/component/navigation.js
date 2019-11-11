const navigation = () => {
	let navbar = document.createElement('nav');
	let navWrap = document.createElement('div');
	navWrap.classList.add('navWrap');
	navbar.appendChild(navWrap);

	let logoWrap = document.createElement('div');
	let linkWrap = document.createElement('div');
	logoWrap.classList.add('logoWrap');
	linkWrap.classList.add('linkWrap');
	navWrap.appendChild(logoWrap);
	navWrap.appendChild(linkWrap);
	// create logo for navbar
	let logo = document.createElement('a');
	logo.classList.add('logo');
	logoWrap.appendChild(logo);
	logo.innerHTML = "Linda"
	// create links for navbar
	let navLinkOne = document.createElement('span');
	let navAnchorOne = document.createElement('a');
	navLinkOne.appendChild(navAnchorOne);
	linkWrap.appendChild(navLinkOne);
	navAnchorOne.innerHTML = 'Chicken'
	navAnchorOne.href = "#"
	navAnchorOne.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionOne');
		sectionOne.style.display = 'block';
		sectionOne.style.background = '#fff';
	});

	let navLinkTwo = document.createElement('span');
	let navAnchorTwo = document.createElement('a');
	navLinkTwo.appendChild(navAnchorTwo);
	linkWrap.appendChild(navLinkTwo);
	navAnchorTwo.innerHTML = 'Sandwich'
	navAnchorTwo.href = "#"
	navAnchorTwo.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionTwo');
		sectionOne.style.display = 'block';
		sectionOne.style.background = '#fff';
	});

	let navLinkThree = document.createElement('span');
	let navAnchorThree = document.createElement('a');
	navLinkThree.appendChild(navAnchorThree);
	linkWrap.appendChild(navLinkThree);
	navAnchorThree.innerHTML = 'Meal';
	navAnchorThree.href = "#";

	let navLinkFour = document.createElement('span');
	let navAnchorFour = document.createElement('a');
	navLinkFour.appendChild(navAnchorFour);
	linkWrap.appendChild(navLinkFour);
	navAnchorFour.innerHTML = '$5 fill ups';
	navAnchorFour.href = "#";

	let navLinkFive = document.createElement('span');
	let navAnchorFive = document.createElement('a');
	navLinkFive.appendChild(navAnchorFive);
	linkWrap.appendChild(navLinkFive);
	navAnchorFive.href = "#";
	navAnchorFive.innerHTML = 'Sides';

	let navLinkSix = document.createElement('span');
	let navAnchorSix = document.createElement('a');
	navLinkSix.appendChild(navAnchorSix);
	linkWrap.appendChild(navLinkSix);
	navAnchorSix.href = "#";
	navAnchorSix.innerHTML = 'Classic';

	let navLinkSeven = document.createElement('span');
	let navAnchorSeven = document.createElement('a');
	navLinkSeven.appendChild(navAnchorSeven);
	linkWrap.appendChild(navLinkSeven);
	navAnchorSeven.href = "#";
	navAnchorSeven.innerHTML = 'Dessert';

	let navLinkEight = document.createElement('span');
	let navAnchorEight = document.createElement('a');
	navLinkEight.appendChild(navAnchorEight);
	linkWrap.appendChild(navLinkEight);
	navAnchorEight.href = "#";
	navAnchorEight.innerHTML = 'Drinks';

	let navLinkNine = document.createElement('span');
	let navAnchorNine = document.createElement('a');
	navLinkNine.appendChild(navAnchorNine);
	linkWrap.appendChild(navLinkNine);
	navAnchorNine.href = "#";
	navAnchorNine.innerHTML = 'Sauce';

	return navbar
}
document.body.appendChild(navigation())
export { navigation as default }