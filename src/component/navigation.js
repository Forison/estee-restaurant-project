const navigation = () => {
	const navbar = document.createElement('nav');
	const navWrap = document.createElement('div');
	navWrap.classList.add('navWrap');
	navbar.appendChild(navWrap);

	const logoWrap = document.createElement('div');
	const linkWrap = document.createElement('div');
	logoWrap.classList.add('logoWrap');
	linkWrap.classList.add('linkWrap');
	navWrap.appendChild(logoWrap);
	navWrap.appendChild(linkWrap);
	// create logo for navbar
	const logo = document.createElement('a');
	logo.classList.add('logo');
	logoWrap.appendChild(logo);
	logo.innerHTML = "Linda";
	logo.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'block';
		document.querySelector('.sectionOne').style.display = 'none';
		document.querySelector('.sectionThree').style.display = 'none';
		document.querySelector('.sectionTwo').style.display = 'none';
		document.querySelector('.sectionFour').style.display = 'none';
		sectionOne.style.background = '#fff';
	});
	// create links for navbar
	const navLinkOne = document.createElement('span');
	const navAnchorOne = document.createElement('a');
	navLinkOne.appendChild(navAnchorOne);
	linkWrap.appendChild(navLinkOne);
	navAnchorOne.innerHTML = 'Chicken';
	navAnchorOne.href = "#";
	navAnchorOne.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionOne');
		sectionOne.style.display = 'block';
		document.querySelector('.sectionThree').style.display = 'none';
		document.querySelector('.sectionTwo').style.display = 'none';
		document.querySelector('.sectionFour').style.display = 'none';
		sectionOne.style.background = '#fff';
	});

	const navLinkTwo = document.createElement('span');
	const navAnchorTwo = document.createElement('a');
	navLinkTwo.appendChild(navAnchorTwo);
	linkWrap.appendChild(navLinkTwo);
	navAnchorTwo.innerHTML = 'Sandwich';
	navAnchorTwo.href = "#";
	navAnchorTwo.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionTwo');
		sectionOne.style.display = 'block';
		document.querySelector('.sectionThree').style.display = 'none';
		document.querySelector('.sectionFour').style.display = 'none';
		document.querySelector('.sectionOne').style.display = 'none';
		sectionOne.style.background = '#fff';
	});

	const navLinkThree = document.createElement('span');
	const navAnchorThree = document.createElement('a');
	navLinkThree.appendChild(navAnchorThree);
	linkWrap.appendChild(navLinkThree);
	navAnchorThree.innerHTML = 'Meal';
	navAnchorThree.href = "#";
	navAnchorThree.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionThree');
		sectionOne.style.display = 'block';
		document.querySelector('.sectionFour').style.display = 'none';
		document.querySelector('.sectionTwo').style.display = 'none';
		document.querySelector('.sectionOne').style.display = 'none';
		sectionOne.style.background = '#fff';
	});

	const navLinkFour = document.createElement('span');
	const navAnchorFour = document.createElement('a');
	navLinkFour.appendChild(navAnchorFour);
	linkWrap.appendChild(navLinkFour);
	navAnchorFour.innerHTML = '$5 fill ups';
	navAnchorFour.href = "#";
	navAnchorFour.addEventListener('click', () => {
		let container = document.querySelector('.container');
		container.style.display = 'none';
		let sectionOne = document.querySelector('.sectionFour');
		sectionOne.style.display = 'block';
		document.querySelector('.sectionThree').style.display = 'none';
		document.querySelector('.sectionTwo').style.display = 'none';
		document.querySelector('.sectionOne').style.display = 'none';
		sectionOne.style.background = '#fff';
	});
	return navbar;
}
document.body.appendChild(navigation());
export { navigation as default };