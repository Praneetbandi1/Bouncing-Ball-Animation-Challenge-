//JavaScript file (script. js)
const canvas = ducment.getElementById(`canvas`);
const ctx = canvas.getcontext(`2d`);



class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;

    }
}

draw(); {
        ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0.2 * Math.PI);
    ctx.fillStyle=this.color;
    ctx.fill();

}

