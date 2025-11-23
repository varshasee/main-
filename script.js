const startDate = new Date("2025-10-01");
const arrivalDate = new Date("2025-12-20");
const messages = [
  "Priya started braiding herself out of boredom ✦",
  "I caught Priya trying to escape through my leggings ✧",
  "Priya has developed its own personality and is demanding snacks ✦",
  "She’s one week away from being declared a national park ✧"
];

function update() {
  const today = new Date();
  const daysGone = Math.floor((today - startDate) / 86400000);
  const daysLeft = Math.floor((arrivalDate - today) / 86400000);
  const length = (daysGone * 0.4).toFixed(1);

  document.getElementById("days").textContent = daysGone;
  document.getElementById("length").textContent = length;
  document.getElementById("left").textContent = daysLeft;

  // Change image based on days
  const img = document.getElementById("priyaImg");
  const stage = Math.min(Math.floor(daysGone / 10), 5);
  img.src = `https://i.imgur.com/STAGE${stage}-LINK.png`; // replace with your 6 images

  // Rotate messages
  document.getElementById("msg").textContent = messages[daysGone % messages.length];
}

update();
setInterval(update, 60000);

// Upload → success
document.getElementById("ticket").onchange = function(e) {
  if (e.target.files[0]) {
    document.getElementById("priyaImg").src = "https://i.imgur.com/SHORT-HAIR-LINK.png";
    document.getElementById("success").classList.remove("hidden");
  }
};