const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";

ctx.lineCap = "round";

ctx.lineWidth = 10;

// ctx.globalCompositeOperation = "color-burn";
// on click down over element
let isDrawing = false;

let lastX = 0;

let lastY = 0;

let hue = 0;

let direction = true;

function draw(e) {
  // stop function from running when not moused down
  if (!isDrawing) return;

  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   start from
  ctx.beginPath();

  //   go to
  ctx.moveTo(lastX, lastY);

  // offsets from event
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;

  hue = hue >= 360 ? (hue = 0) : hue;

  // flip direcction when linewidth gets too 100 or diminishes to 1
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  // marks where mouse is clicked down on screen
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));

// if mouse is moved out of screen while clicked down
canvas.addEventListener("mouseout", () => (isDrawing = false));
