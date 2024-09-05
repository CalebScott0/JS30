const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
// const clockFace = document.querySelector(".clock-face");
// const div = document.createElement("div");
// clockFace.appendChild(div);
// div.style.transform = `rotate(30deg)`;

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = Math.floor(now.getHours() / 2);
  const secondsDegrees = (seconds / 60) * 360 + 90; //offset by 90 degrees set in css
  if (secondsDegrees === 90) {
    secondHand.style.transition = "0s";
  }
  if (secondsDegrees > 90) {
    secondHand.style.transition = "all 0.05s";
    secondHand.style.transitionTimingFunction =
      "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;
  // transform second hand by converted degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
