import "./styles/main.scss"

const boxClass = 'box__content';
const hidden = 'hidden';

document.querySelector('#app').innerHTML = `
  <div class='box__container'>
    <div id='box_1' class=${boxClass}></div>
  </div>
`

const box_1 = document.querySelector('#box_1');
console.log(box_1);

box_1.addEventListener('click', () => {
    box_1.classList.add(`${boxClass}--${hidden}`)
})
