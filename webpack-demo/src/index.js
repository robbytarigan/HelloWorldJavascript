import { cube } from './math.js';
import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = _.join([
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ], '\n\n');

  return element;
}

document.body.appendChild(component());