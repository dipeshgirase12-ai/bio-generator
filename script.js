const bioTemplates = {
  professional: [
    "{name} | {profession} 🚀\nBuilding Smart Solutions\nTurning Ideas into Reality",
    "Professional {profession}\nDriven by Passion 💼\nFuture Ready 🔥"
  ],
  attitude: [
    "{name} ⚡\nSilent Mind, Loud Results\nNo Competition 👑",
    "Born to Express 😎\n{profession}\nBuilt Different 🔥"
  ],
  coder: [
    "Eat ☕ Code 💻 Repeat 🔁\n{name} | {profession}",
    "Debugging Life One Line at a Time\nFuture Tech Leader 🚀"
  ],
  rajput: [
    "Rajput Blood ❤️‍🔥\n{name}\nLegacy | Honor | Pride ⚔️",
    "Warrior Mindset ⚔️\nBorn to Rule 👑"
  ],
  love: [
    "{name} ❤️\nLiving with Emotions\nSpreading Positivity ✨",
    "Dreamer | Believer 💫\n{profession}"
  ]
};

function generateBio() {
  const name = document.getElementById("name").value || "Your Name";
  const profession = document.getElementById("profession").value || "Creator";
  const category = document.getElementById("category").value;

  const templates = bioTemplates[category];
  const randomBio = templates[Math.floor(Math.random() * templates.length)];

  const finalBio = randomBio
    .replace("{name}", name)
    .replace("{profession}", profession);

  document.getElementById("result").value = finalBio;
}

function copyBio() {
  const textArea = document.getElementById("result");
  textArea.select();
  document.execCommand("copy");
  alert("Bio Copied!");
}
