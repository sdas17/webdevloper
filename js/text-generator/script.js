
function insetvaer(){
const quoteBox = document.getElementById("quoteBox");
// const button = document.getElementById("quoteBtn");
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "JavaScript is the duct tape of the Internet.",
  "Learning never exhausts the mind.",
  "Dream big. Start small. Act now.",
  "Consistency beats motivation every time."
];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex,'15');
  
  quoteBox.textContent = quotes[randomIndex];
}
setInterval(() => {
    insetvaer()
}, 1000);