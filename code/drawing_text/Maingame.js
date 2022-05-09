const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
// first rectangle
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);
// text
context.strokeStyle = 'white';
context.lineWidth = 1;
context.font = '36px arial';
context.strokeText('Canvas text', 50, 50);
context.fillStyle = 'red';
context.font = '48px georgia';
context.fillText('Canvas text', 50, 150);
