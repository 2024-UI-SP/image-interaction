import './style.css'
import createImageMap from './src/imagemap/imagemap'



document.querySelector('#app').innerHTML = `
<h1>Image Interactions</h1>
<p> An example application.  </p>
<br>
  <div>
    <div id="imagemap"> Map is here 
    
    </div> 
    <div id="info"> Info is here </div>
  </div>
`

createImageMap(document.querySelector('#imagemap'));
