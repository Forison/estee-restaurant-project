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
	navAnchorOne.innerHTML = 'linkOne'
	navAnchorOne.href = "#"

	let navLinkTwo = document.createElement('span');
	let navAnchorTwo = document.createElement('a');
	navLinkTwo.appendChild(navAnchorTwo);
	linkWrap.appendChild(navLinkTwo);
	navAnchorTwo.innerHTML = 'linkTwo'
	navAnchorTwo.href = "#"

	let navLinkThree = document.createElement('span');
	let navAnchorThree = document.createElement('a');
	navLinkThree.appendChild(navAnchorThree);
	linkWrap.appendChild(navLinkThree);
	navAnchorThree.innerHTML = 'linkThree'
	navAnchorThree.href = "#"

	let navLinkFour = document.createElement('span');
	let navAnchorFour = document.createElement('a');
	navLinkFour.appendChild(navAnchorFour);
	linkWrap.appendChild(navLinkFour);
	navAnchorFour.innerHTML = 'linkFour'
	navAnchorFour.href = "#"

	let navLinkFive = document.createElement('span');
	let navAnchorFive = document.createElement('a');
	navLinkFive.appendChild(navAnchorFive);
	linkWrap.appendChild(navLinkFive);
	navAnchorFive.href = "#"
	navAnchorFive.innerHTML = 'linkFive'

	return navbar
}
document.body.appendChild(navigation())
export { navigation as default }