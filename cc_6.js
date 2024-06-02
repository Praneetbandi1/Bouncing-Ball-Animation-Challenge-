
//Starting Ball class
class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
//Update Start
  update() {
    this.x += this.dx;
    this.y += this.dy;
//Step1 start
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }//Step1 END

    //Step2 start
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }//Step2 END
  }//Update END

} //END Ball class
//Initializing the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ball = new Ball(100, 100, 20, 2, 2, 'blue');

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.update();
  ball.draw();
}, 16); // 16ms interval for smooth animation