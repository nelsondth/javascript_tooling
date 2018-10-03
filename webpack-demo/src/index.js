import _ from 'lodash';
import './style.css';
import {x, printX} from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  btn.onclick = printX;

  element.innerHTML = _.join(['Hello', 'webpackss'], ' ');
  element.classList.add('hello');
  console.log(`Esto se imprime desde la variable ${x}`);
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());