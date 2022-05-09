const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
// first rectangle
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);
// second rectangle
context.fillStyle = 'rgb('255, 0, 0)';
context.fillRect(50, 50, 100, 150);
// third rectangle
context.fillStyle = 'rgb(0, 255, 0)';
context.fillRect(75, 75, 100, 150);
// fourth rectangle
context.fillStyle = 'rgba(255, 0, 255, 0.75)';
context.fillRect(25, 100, 175, 50);
// draw more rectangles if you want
// draw rectnagles that are just outlines below
context.strokeStyle = 'rgb(255, 255, 255)';
context.lineWidth = 5;
context.strokeRect(25, 25, 175, 200);
