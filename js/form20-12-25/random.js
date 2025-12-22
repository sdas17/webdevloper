import quizData from '../form20-12-25/quiz.js';

function random() {
  const data = new Set();

  while (data.size !== 5) {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    data.add(quizData[randomIndex]);
  }

  return [...data];
}

const data_value = random();
console.log(data_value);

const form_acess = document.getElementById('form_acess');
const resultBox = document.getElementById('form-result'); // ✅ FIX

data_value.forEach((obj, index) => {
  const create_div = document.createElement('div');
  create_div.className = 'create_div';

  const heading = document.createElement('h3');
  heading.textContent = `${index + 1}. ${obj.question}`;
  create_div.appendChild(heading);

  obj.options.forEach((optLabel, optIndex) => {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index}`;
    input.value = optIndex;

    label.appendChild(input);
    label.append(` ${optLabel}`);

    create_div.appendChild(label);
    create_div.appendChild(document.createElement('br'));
  });

  form_acess.appendChild(create_div);
});

// Submit button
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Submit Quiz';
form_acess.appendChild(submitBtn);

// Submit logic
form_acess.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;

  data_value.forEach((obj, index) => {
    const selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );

    if (selected && Number(selected.value) === obj.correctAnswer) {
      score++;
    }
  });

  resultBox.textContent = `🎯 Your Score: ${score} / ${data_value.length}`;
});
