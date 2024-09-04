// on keyboard key press

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //  grab associated key with press
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // on key click not associated with a sound, stop function from running all together
  if (!audio) return;
  audio.currentTime = 0; //rewind to start to allow repeated pressing
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it is not a transform
  // 'this' is always equal to what got called against it ->
  //  in this case add event listener got called against key so this = key (key is global object in this function)
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// listen to transition end on each key
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
