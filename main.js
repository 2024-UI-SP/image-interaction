import './main.css'
import createImageMap from './src/imagemap/imagemap'
import { createInfo } from './src/info/info'



document.querySelector('#app').innerHTML = `
<div>
  <div id="header">
    <h1>Image Interactions</h1>
    <p> An example application.  </p>
    <br>
  </div>
  <div id="info-map">
    <div id="info">      </div>
    <div id="imagemap">  </div> 
  </div>
</div>
`;

createInfo(document.querySelector('#info'));
createImageMap(document.querySelector('#imagemap'));
