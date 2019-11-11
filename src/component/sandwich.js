import Sand from './images/sandwich.jpg';

const sandwich = () => {
	let sectionTwo = document.createElement('div');
	sectionTwo.classList.add('sectionTwo');

	let sectionWrap = document.createElement('div');
	sectionWrap.classList.add('sectionWrap');
	sectionWrap.style.display = 'flex';

	let leftSide = document.createElement('div');
	let rightSide = document.createElement('div');
	leftSide.classList.add('leftSide');
	rightSide.classList.add('rightSide');
	sectionWrap.appendChild(leftSide);
	sectionWrap.appendChild(rightSide);
	sectionTwo.appendChild(sectionWrap);

	let leftSideImg = new Image();
	leftSideImg.src = Sand;
	leftSideImg.classList.add('leftSideImg');
	leftSide.appendChild(leftSideImg)

	let title = document.createElement('h3');
	title.innerHTML = 'Delicious Sandwich';
	title.classList.add('title');
	rightSide.appendChild(title);

	let description = document.createElement('p');
	title.classList.add('description');
	description.innerHTML = 'This is food is really nice you should try it \n This is food is really nice you should try it ';
	rightSide.appendChild(description);

	let butWrap = document.createElement('div');
	butWrap.classList.add('butWrap');
	rightSide.appendChild(butWrap);

	let but = document.createElement('button');
	but.classList.add('ordFood');
	but.innerHTML = 'Order Food';
	butWrap.appendChild(but);

	let res = document.createElement('button');
	res.classList.add('resBut');
	res.innerHTML = 'Reservation';
	butWrap.appendChild(res);

	return sectionTwo;
}
document.body.appendChild(sandwich());
export { sandwich as default }