const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);
context.fillStyle = 'rgb(255, 0, 0)';
context.fillRect(50, 50, 100, 150);
