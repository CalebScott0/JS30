// returns a node list
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  /* grab data attribute set in html
   fallback - (color has no data attribute) */
  const suffix = this.dataset.sizing || '';
  console.log(this.value)

  /* grab whole document element (root)
     set style property with css variable according to this.name (spacing || blur || base)   */
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// fires after change is complete
inputs.forEach((input) => input.addEventListener("change", handleUpdate));

// fires on change of input
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
