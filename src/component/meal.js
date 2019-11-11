import dish from './images/meal.jpg';

const meal = () => {
    let sectionThree = document.createElement('div');
    sectionThree.classList.add('sectionThree');

    let sectionWrap = document.createElement('div');
    sectionWrap.classList.add('sectionWrap');
    sectionWrap.style.display = 'flex';

    let leftSide = document.createElement('div');
    let rightSide = document.createElement('div');
    leftSide.classList.add('leftSide');
    rightSide.classList.add('rightSide');
    sectionWrap.appendChild(leftSide);
    sectionWrap.appendChild(rightSide);
    sectionThree.appendChild(sectionWrap);

    let leftSideImg = new Image();
    leftSideImg.src = dish;
    leftSideImg.classList.add('leftSideImg');
    leftSide.appendChild(leftSideImg)

    let title = document.createElement('h3');
    title.innerHTML = 'Delicious Meal';
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

    return sectionThree;
}
document.body.appendChild(meal());
export { meal as default }