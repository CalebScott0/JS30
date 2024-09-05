const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; //offset by 90 degrees set in css

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  let hours = Math.floor(now.getHours() / 2);
  if (hours === 0) hours++;

  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transition = secondsDegrees === 90 && "0s";

  if (secondsDegrees > 90) {
    secondHand.style.transition = "all 0.05s";
    secondHand.style.transitionTimingFunction =
      "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  // transform second hand by converted degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
