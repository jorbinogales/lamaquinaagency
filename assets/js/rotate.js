// Global variable
const defaultPerspective = '-150px';
// Track the mouse movemont
let mouseX = 0;
let mouseY = 0;
let lastXDeg = 180;
let lastYDeg = 180;
// The speed of the cube following movement
const speed = 0.1;

$('.img').mousemove((e) => {
  setTimeout(rotateCube(e), 1000)
})
$('.img').mousemove(updateMousePosition);
// Follow mouse movement
function updateMousePosition(e) {
  mouseX = e.pageX/getWidth();
  mouseY = e.pageY /getHeight();
}
function rotateCube(e) {
  lastXDeg = lastXDeg + (getAngle(mouseX) - lastXDeg
) * speed;
  lastYDeg = lastYDeg + (getAngle(mouseY) - lastYDeg
    ) * speed;
  console.log(lastXDeg);
  console.log(lastYDeg);
    if (lastXDeg >= 20) {
        lastXDeg = 20;
    }
    if (lastXDeg <= -20) {
        lastXDeg = -20;
    }
    if (lastYDeg >= 20) {
        lastYDeg = 20;
    }
    if (lastYDeg <= -20) {
        lastYDeg = -20;
    }
  let newStyle = `translateZ(${defaultPerspective}) rotateY(${lastXDeg}deg) rotateX(${lastYDeg}deg)`
    $(e.target).css('transition', '.25s all');
    $(e.target).css('transform', newStyle);
}
// this function return the corresponding angle for an x value
function getAngle(x) {
  return 180 - 360 * x;
}
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )
}