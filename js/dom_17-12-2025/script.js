// const title = document.querySelector('#title')
// const btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//   title.innerText = "DOM Updated Successfully 🚀";
//   title.style.color = "#667eea";
  
// })
// console.log(title,btn)

// Select elements
const title = document.querySelector("#title");
const list = document.querySelector("#techList");
const items = document.querySelectorAll(".item");

// Buttons
const parentBtn = document.querySelector("#parent");
const childrenBtn = document.querySelector("#children");
const firstBtn = document.querySelector("#first");
const lastBtn = document.querySelector("#last");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const allBtn = document.querySelector("#all");


// helper
function clear() {
  list.classList.remove("active");
  items.forEach(i => i.classList.remove("active"));
}

// Parent
parentBtn.addEventListener("click", () => {
  clear();
  list.parentElement.classList.add("active");
  title.innerText = "Parent accessed";
});

// Children
childrenBtn.addEventListener("click", () => {
  clear();
  [...list.children].forEach(li => li.classList.add("active"));
  title.innerText = "Children accessed";
});

// First child
firstBtn.addEventListener("click", () => {
  clear();
  list.firstElementChild.classList.add("active");
  title.innerText = "First child accessed";
});

// Last child
lastBtn.addEventListener("click", () => {
  clear();
  list.lastElementChild.classList.add("active");
  title.innerText = "Last child accessed";
});

// Previous sibling (of JS item)
prevBtn.addEventListener("click", () => {
  clear();
  items[2].previousElementSibling.classList.add("active");
  title.innerText = "Previous sibling accessed";
});

// Next sibling (of JS item)
nextBtn.addEventListener("click", () => {
  clear();
  items[2].nextElementSibling.classList.add("active");
  title.innerText = "Next sibling accessed";
});

// All items
allBtn.addEventListener("click", () => {
  clear();
  items.forEach(item => item.classList.add("active"));
  title.innerText = "All items accessed";
});
