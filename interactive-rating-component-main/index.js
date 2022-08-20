function myGreetinng() {
  const time = new Date().getHours();
  let greeting;
  if (time < 12) {
    document.getElementById("greet").innerHTML = "Good morning😊";
  } else if (time < 18) {
    document.getElementById("greet").innerHTML = "Good day😊";
  } else {
    document.getElementById("greet").innerHTML = "Good evening😊";
  }
}

myGreetinng();

const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".butn");

submitButton.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => (rating.innerHTML = rate.innerHTML));
});
