import _ from "lodash";
// import './assets/styles/css/index.css';
// import Icon from './assets/images/iphone_14_pro_max.jpeg';

function component() {
  const element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');
    // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
