function choosePath(choice) {
  const message = document.getElementById("message");
  const buttons = document.getElementById("buttons");

  if (choice === "right") {
    message.innerText = "💥 Game Over.";
    buttons.innerHTML = "";
  } else {
    message.innerText = "You come to a lake. Swim or Wait?";
    buttons.innerHTML = `
      <button onclick="lakeChoice('swim')">Swim</button>
      <button onclick="lakeChoice('wait')">Wait</button>
    `;
  }
}

function lakeChoice(choice) {
  const message = document.getElementById("message");
  const buttons = document.getElementById("buttons");

  if (choice === "swim") {
    message.innerText = "🐊 Game Over.";
    buttons.innerHTML = "";
  } else {
    message.innerText = "Which door? Blue, Red or Yellow";
    buttons.innerHTML = `
      <button onclick="doorChoice('blue')">Blue</button>
      <button onclick="doorChoice('red')">Red</button>
      <button onclick="doorChoice('yellow')">Yellow</button>
    `;
  }
}

function doorChoice(choice) {
  const message = document.getElementById("message");
  const buttons = document.getElementById("buttons");

  if (choice === "red") {
    message.innerText = "🔥 Game Over.";
  } else if (choice === "blue") {
    message.innerText = "🐍 Game Over.";
  } else if (choice === "yellow") {
    message.innerText = "🎉 You Win! Treasure Found 🏆";
  } else {
    message.innerText = "🚪 Invalid choice. Game Over.";
  }

  buttons.innerHTML = "";
}
