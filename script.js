const message = `Dear Vekk, 
Wishing you a day filled with laughter, love, and blessings! 🎂 🎈 
and your heart shine as bright as the candles. ✨ 
Happy Birthday, budhuuu! 💖`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("birthday-message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

function startGame(type) {
  if (type === "memory") {
    window.location.href = "games/gift-memory.html";
  } else if (type === "balloon") {
    window.location.href = "games/balloon-pop.html";
  }
}
