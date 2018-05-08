// Your code here!


var Context = {
    canvas: null,
    context: null,
    creat: function (canvas) {
        this.canvas = document.getElementById(canvas);
        this.context = this.canvas.getContext('2d');
        return this.context;
    },
    
};

var Conponent = function (width, height, color, x, y,speedx,speedy) {
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.x = x;
    this.y = y;
    this.draw = function () {
        Context.context.fillStyle = color;
        
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.x <= 0 || this.x >= 620) {

            this.speedx = -this.speedx;
        }
        if (this.y <= 0 || this.y >= 460) {

            this.speedy = -this.speedy;
        }
        
        

        Context.context.fillRect(this.x, this.y, this.width, this.height);

    };
};
var backGround = function (width, height, color) {

    this.width = width;
    this.height = height;
    this.draw = function () {
        Context.context.fillStyle = color;
        Context.context.fillRect(0, 0 , this.width, this.height);
    };


};
   


$(document).ready(function () {
   
    Context.creat("canvas");
    

   
    Comp = new Conponent(20, 20, "red", 100, 100,1,1);
    backGround = new backGround(640, 480, "black");
    Comp2 = new Conponent(20, 20, "white", 0, 0,3,5);

    Context.context.beginPath();
    setInterval(function () {
       
        backGround.draw();
        Comp.draw();
        Comp2.draw();
        

    }, 5);
      
});