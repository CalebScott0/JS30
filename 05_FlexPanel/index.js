//  grab node list of all panels
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  // flex transition end - toggle open active
  e.propertyName.includes("flex") && this.classList.toggle("open-active");
}

panels.forEach((panels) => panels.addEventListener("click", toggleOpen));
panels.forEach((panels) =>
  panels.addEventListener("transitionend", toggleActive)
);
