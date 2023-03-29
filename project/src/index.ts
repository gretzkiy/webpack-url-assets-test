import { doWork } from 'lib';

doWork();

// Just to demonstrate that the default public path is applied
const img = document.createElement('img');
img.src = require('./assets/logo.svg');
document.body.appendChild(img);
