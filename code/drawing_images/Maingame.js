const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
// first rectangle
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);
