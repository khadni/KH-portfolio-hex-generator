const btn = document.getElementById("hexbtn");

const changeBg = () => {
  let angle = Math.ceil(Math.random() * 360);

  let randomHexOne = "";
  let randomHexTwo = "";

  let hexPossibilities = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  for (let x = 0; x < 6; x++) {
    let randomHex = Math.floor(Math.random() * (hexPossibilities.length - 1));
    randomHexOne += hexPossibilities[randomHex];
    randomHex = Math.floor(Math.random() * (hexPossibilities.length - 1));
    randomHexTwo += hexPossibilities[randomHex];
  }

  document.body.style.background = `linear-gradient(${angle}deg, #${randomHexOne}, #${randomHexTwo})`;
  document.querySelector("#deg").textContent = `${angle}deg`;
  document.querySelector("#hex1").textContent = `#${randomHexOne}`;
  document.querySelector("#hex2").textContent = `#${randomHexTwo}`;
};

window.addEventListener("load", changeBg);
btn.addEventListener("click", changeBg);
