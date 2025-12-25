import quizData from '../form20-12-25/quiz.js';

function sample() {
  const sample_dat = new Set();

  while (sample_dat.size !== 5) {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    sample_dat.add(quizData[randomIndex]);
  }

  return [...sample_dat];
}

const static_value = sample();
let original_answer={}
console.log(static_value, '14');

// dom created quiz question
const form_acess = document.getElementById('form_acess');
const resultBox = document.getElementById('form-result'); // ✅ FIX
static_value.forEach((obj,index)=>{
const create_div =document.createElement('div')
  create_div.className = 'create_div';
  const heading = document.createElement('h3');
  heading.innerHTML = `q${index + 1}. ${obj.question}`;
  original_answer[`q${index + 1}`]=obj['correctAnswer']
  console.log(heading.textContent);
  create_div.appendChild(heading)
  form_acess.appendChild(create_div)
  console.log(obj.options,'28');
 obj.options.forEach((optionText, optIndex) => {
  const label = document.createElement('label');

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = `q${index}`;     // group per question
  input.value = optionText;

  label.appendChild(input);
  label.append(` ${optionText}`);

  create_div.appendChild(label);
  create_div.appendChild(document.createElement('br'));
});

  

    
})
resultBox.innerHTML='hiiiiiiiiiiiiii'
const button_acess=document.createElement('button')
button_acess.type = 'submit';
button_acess.textContent = 'Submit Quiz';
button_acess.className='button_acess'
form_acess.appendChild(button_acess);
// checked they submit logic 
console.log(original_answer,'57');
form_acess.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form_acess);
  let result = 0;
  console.log(data.entries());
  

  for (let [key, value] of data.entries()) {
    console.log(value===original_answer[key],value,original_answer[key],'65');
    
    if (value === original_answer[key]) {
      result++;
    }
  }

  resultBox.textContent = `You answered ${result} out of 5 correctly`;
});
