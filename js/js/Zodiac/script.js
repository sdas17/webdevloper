const compliments = [
  "You have a calm energy that makes people feel safe around you.",
  "Your mindset is stronger than most people realize.",
  "You naturally inspire confidence without trying.",
  "Your presence brings balance wherever you go.",
  "You have a rare ability to stay grounded in chaos.",
  "People trust you because your intentions feel genuine.",
  "Your growth mindset sets you apart from the crowd.",
  "You carry wisdom beyond your years.",
  "Your consistency is your hidden superpower.",
  "You think deeply, and that makes your decisions powerful.",
  "You have a quiet strength that speaks louder than words.",
  "Your patience shows emotional maturity.",
  "You adapt quickly, which makes you unstoppable.",
  "Your intuition guides you in the right direction.",
  "You bring clarity where others bring confusion.",
  "Your discipline will reward you long-term.",
  "You are emotionally intelligent and self-aware.",
  "Your effort never goes unnoticed, even if it feels slow.",
  "You have leadership energy, even when you stay silent.",
  "Your resilience defines your character.",
  "You learn from experiences instead of running from them.",
  "Your focus helps you achieve meaningful results.",
  "You respect both logic and emotions equally.",
  "Your determination shapes your destiny.",
  "You have the courage to improve yourself continuously.",
  "Your honesty makes you trustworthy.",
  "You remain strong even when things feel uncertain.",
  "Your mindset attracts the right opportunities.",
  "You grow stronger with every challenge.",
  "Your self-control is admirable.",
  "You are becoming the best version of yourself every day."
];

const victimCardMessages = [
  "You’ve been carrying more weight than most people realize.",
  "The universe has tested your patience repeatedly.",
  "Your struggles have shaped your inner strength.",
  "You often give more than you receive.",
  "Life has asked you to be strong before you were ready.",
  "You’ve faced challenges that would break many others.",
  "Your silence hides battles you’ve already won.",
  "You’ve learned endurance through difficult experiences.",
  "The cosmos knows the effort you’ve been making.",
  "You’ve been misunderstood despite your good intentions.",
  "Your journey has required resilience and sacrifice.",
  "You’ve grown through pressure, not comfort.",
  "Your hardships are preparing you for something greater.",
  "You’ve been patient even when answers were delayed.",
  "Your strength comes from surviving tough phases.",
  "You’ve endured emotional storms quietly.",
  "Your struggles have refined your character.",
  "You’ve walked a harder path than most.",
  "The universe is slowly balancing what you’ve endured.",
  "Your perseverance will soon be rewarded."
];
// namelength*title.length* year *recommendationlength
const recommendations = [
  "Focus on self-care and protect your energy.",
  "Avoid making impulsive decisions today.",
  "Spend time reflecting before reacting.",
  "Trust your intuition, but verify facts.",
  "Take small steps instead of rushing outcomes.",
  "Set clear boundaries with people around you.",
  "Prioritize rest and mental clarity.",
  "Channel your emotions into creative work.",
  "Be patient with processes that take time.",
  "Seek guidance from someone experienced.",
  "Let go of what you cannot control.",
  "Practice gratitude to rebalance your mindset.",
  "Avoid unnecessary conflicts today.",
  "Focus on long-term goals rather than quick wins.",
  "Reconnect with something that grounds you.",
  "Listen more than you speak right now.",
  "Give yourself permission to pause.",
  "Strengthen routines that bring stability.",
  "Observe patterns before taking action.",
  "Trust that slow progress is still progress."
];
// day*month*year*size
const predictions = [
  "A period of clarity will slowly begin to unfold.",
  "Emotional pressure will ease with time.",
  "Unexpected support may come from a close connection.",
  "Delays today may protect you from bigger issues.",
  "A lesson from the past will soon make sense.",
  "You may feel tested, but growth is happening quietly.",
  "A shift in mindset will change your direction.",
  "Patience will bring better results than force.",
  "You are approaching the end of a difficult phase.",
  "Small signs will guide your next decision.",
  "What feels heavy now will become lighter soon.",
  "You may gain insight through a meaningful conversation.",
  "Challenges will refine your inner strength.",
  "A calm phase is approaching after turbulence.",
  "Your efforts will start showing subtle results.",
  "Emotional balance will improve gradually.",
  "Something unresolved may finally settle.",
  "You will gain confidence through experience.",
  "The coming days favor inner healing.",
  "Stability will return step by step."
];
const Zodiac_sign = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];



// form fetch data
const astroForm = document.getElementById('astroForm');
const result = document.getElementById('result');

astroForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const first_name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const dobValue = document.getElementById('dob').value; // ✅ NO Number()
  const system = document.getElementById('system').value;

  const dob = new Date(dobValue);

  const day = dob.getDate();       
  const month = dob.getMonth();     
  const year = dob.getFullYear();  
const index = (day + month + year) % predictions.length;

  const prediction_data = predictions[index];
  const recommendations_data = recommendations[index];

result.innerHTML=`<h2>Welcome, ${title} ${first_name}</h2>
 <p><strong>Zodiac:</strong> ${Zodiac_sign[month-1]}</p>
 <p>${prediction_data}</p>
  <p>${recommendations_data}</p>
`
  result.style.display = "block";

});
console.log(result.innerHTML,'123')
