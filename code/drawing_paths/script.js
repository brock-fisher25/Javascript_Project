const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
// first rectangle
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);
// triangle
context.fillStyle = 'rgb(255, 0, 0)';
context.beginPath();
context.moveTo(50, 50);
context.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
context.lineTo(100, 50 + triHeight);
context.lineTo(50, 50);
context.fill();
// circle
context.fillStyle = 'rgb(0, 0, 255)';
context.beginPath();
context.arc(150, 106, 50, degToRad(0), degToRad(360), false);
context.fill();
// another arc
context.fillStyle = 'yellow';
context.beginPath();
context.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
context.lineTo(200, 106);
context.fill();

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
