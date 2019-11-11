import chick from './images/chickenTigh.jpg';

const chicken = () => {
	const sectionOne = document.createElement('div');
	sectionOne.classList.add('sectionOne');

	const sectionWrap = document.createElement('div');
	sectionWrap.classList.add('sectionWrap');
	sectionWrap.style.display = 'flex';

	const leftSide = document.createElement('div');
	const rightSide = document.createElement('div');
	leftSide.classList.add('leftSide');
	rightSide.classList.add('rightSide');
	sectionWrap.appendChild(leftSide);
	sectionWrap.appendChild(rightSide);
	sectionOne.appendChild(sectionWrap);

	const leftSideImg = new Image();
	leftSideImg.src = chick;
	leftSideImg.classList.add('leftSideImg');
	leftSide.appendChild(leftSideImg)

	const title = document.createElement('h3');
	title.innerHTML = 'Delicious Chicken Tigh';
	title.classList.add('title');
	rightSide.appendChild(title);

	const description = document.createElement('p');
	title.classList.add('description');
	description.innerHTML = 'This is food is really nice you should try it \n This is food is really nice you should try it ';
	rightSide.appendChild(description);
	
	const butWrap = document.createElement('div');
	butWrap.classList.add('butWrap');
	rightSide.appendChild(butWrap);
	
	const but = document.createElement('button');
	but.classList.add('ordFood');
	but.innerHTML = 'Order Food';
	butWrap.appendChild(but);

	const res = document.createElement('button');
	res.classList.add('resBut');
	res.innerHTML = 'Reservation';
	butWrap.appendChild(res);

	return sectionOne;
}
document.body.appendChild(chicken());
export { chicken as default }