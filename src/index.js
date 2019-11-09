// import 'lodash';
import navbar from './component/navigation.js';

import './style.css';

const main = () => {
	let element = document.createElement('div');
	element.innerHTML = "hello world again";
	return element;
}
document.body.appendChild(main())

console.log(navbar('hello'))
