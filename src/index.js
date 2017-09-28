//const sum = require('./sum');

/* commented for section 4 - on demand code loading
import sum from './sum';
import './image_viewer';

const total = sum(20, 30);
console.log(total);
*/

const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = function () {

System.import('./image_viewer').then(function(module){
    console.log(module);
});
};

document.body.appendChild(button)
