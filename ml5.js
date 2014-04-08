var R = R || {};
var canvas = document.getElementById("canv"),
    ctx = canvas.getContext("2d"),
    balls = {},i=0;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
var bounceBalInit = function() {
    this.x = Math.random() * 100 ;
    this.y = Math.random() * 100;
    this.speedX = 5;
    this.speedY = -10;
    ctx.fillStyle = "white";
    this.radius = 10;
    this.timeElapsed = 0;
    this.ballMark = i;
    balls[i] = this;
    i++;
}
bounceBalInit.prototype.bounceBalBounce = function () {
    this.x += this.speedX ;
    this.y += this.speedY - Math.random() - 4;
    this.timeElapsed++;
    if (this.y > 570) {
        this.speedY *= -0.75;
        this.speedX *= 0.75;
        this.y = 570;
    }
    this.speedY += 1;
    if (this.x > Math.random() * 1000 + 1000)
    {
        delete balls[this.ballMark];
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    var colr = "rgb(" + parseInt(Math.random() * 255, 10) + ", " + parseInt(Math.random() * 255, 10) + "," + parseInt(Math.random() * 255, 10) + ")";
    ctx.fillStyle = colr;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = colr;
    ctx.stroke();
}

setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    new bounceBalInit();
    for (var u in balls)
       balls[u].bounceBalBounce();
}, 50);