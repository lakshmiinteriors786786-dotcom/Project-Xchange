let credits = 2;

function earnCredit() {
  credits++;
  document.getElementById("credits").innerText = credits;
  alert("You earned 1 Time Credit by teaching!");
}

function showMarketplace() {
  document.getElementById("marketplace")
    .scrollIntoView({ behavior: "smooth" });
}
