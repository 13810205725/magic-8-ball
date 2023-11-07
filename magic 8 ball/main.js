// Functionize Minecraft Fishing Start Code

let DD = document.getElementById("2");

document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Get User Input
  let EE = document.getElementById("1").value;

  let randNum = Math.random();
  console.log(randNum);

  if (EE === "Does a magic 8 ball actually work?") {
    DD.innerHTML = "How dare you doubt me!";
  } else if (EE === "Is JavaScript awesome?") {
    DD.innerHTML = "Of Course!";
  } else if (randNum < 0.2) {
    DD.innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    DD.innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    DD.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    DD.innerHTML = "Don't count on it.";
  } else if (randNum < 1) {
    DD.innerHTML = "Outlook not so good.";
  }
}
