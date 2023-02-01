import "./styles/main.scss";
import Header from './components/Header/'
import Flexbox from "./components/FlexBlox";

const boxClass = 'box__content';
const hidden = 'hidden';

document.querySelector('#app').innerHTML = `
  ${Header}
  ${Flexbox}
`

const box_1 = document.querySelector('#box_1');
console.log(box_1);

box_1.addEventListener('click', () => {
    box_1.classList.add(`${boxClass}--${hidden}`)
})
