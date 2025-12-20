const root = document.getElementById("root");
  const targetDate = new Date("2028-07-14T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      root.innerHTML = "🎉 Countdown finished!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    root.innerHTML = `
      <h2>⏳ Countdown</h2>
      <p><strong>Today:</strong> ${now.toDateString()}</p>
      <p>
        ${days} days,
        ${hours} hours,
        ${minutes} minutes,
        ${seconds} seconds left
      </p>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);