// function attach(data) {
//   const element = document.createElement('li');

//   element.appendChild(textNode);

//   const parent = document.getElementById('root');
//   parent.appendChild(element);
// }

// attach('React');
// attach('TS');
// attach('React JS');
//   const textNode = document.createTextNode('hello code army');
//   const parent = document.getElementById('root');
// //    parent.appendChild(textNode);
// const attr = document.createAttribute('id');
// attr.value = 'from';

// const current_list = document.querySelector('li');
// current_list.setAttributeNode(attr);
// const item_list= document.getElementById("root");
// // item_list.children[1].setAttributeNode(attr)
// item_list.setAttribute('from','valie')
// item_list.setAttribute('from1','valie2')

//*********************** */
// const parent = document.getElementById('root');
// console.log(parent.children[1]);

// const element = document.createElement('li');
// element.textContent = 'TS';

// const child = parent.children[1]; // reference node

// parent.insertBefore(element, child);

const parent = document.getElementById('root');
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

parent.textContent =untrustedString
