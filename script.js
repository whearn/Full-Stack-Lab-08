var rectangleBtn = document.getElementById('rectangle-btn');
var squareBtn = document.getElementById('square-btn');
var circleBtn = document.getElementById('circle-btn');
var triangleBtn = document.getElementById('triangle-btn');

var rectangleWidthInput = document.getElementById('rectangle-width');
var rectangleHeightInput = document.getElementById('rectangle-height');
var squareLengthInput = document.getElementById('square-length');
var circleRadiusInput = document.getElementById('circle-radius');
var triangleHeightInput = document.getElementById('triangle-height');

var Shape = function(shapeName) {
    this.x = Math.floor(Math.random() * 550);
    this.y = Math.floor(Math.random() * 550);
    this.div = document.createElement('div');
    this.div.className = 'shape ' + shapeName;
    this.div.style.top = this.y + 'px';
    this.div.style.left = this.x + 'px';
    this.div.addEventListener('click', function(){
        this.describe();
    }.bind(this));
    var canvas = document.getElementById('shape-canvas');
    canvas.appendChild(this.div);
};
Shape.prototype.describe = function() {
    var stats = document.getElementById('sidepanel');
    console.log(this.x);
}

var Rectangle = function(width, height) {
    Shape.call(this, 'rectangle');
    this.width = width;
    this.height = height;
    this.div.style.width = width + 'px';
    this.div.style.height = height + 'px';
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var Square = function(length) {
    Shape.call(this, 'square');
    this.length = length;
    this.div.style.width = length + 'px';
    this.div.style.height = length + 'px';
};
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

var Circle = function(radius) {
    Shape.call(this, 'circle');
    this.radius = radius;
    this.div.style.width = this.diameter() + 'px';
    this.div.style.height = this.diameter() + 'px';
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
    return 2 * this.radius;
}

var Triangle = function(height) {
    Shape.call(this, 'triangle');
    this.height = height;
    this.div.style.borderBottom = height + 'px solid yellow';
    this.div.style.borderRight = height + 'px solid transparent';
};
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

rectangleBtn.addEventListener('click', function() {
    var rec = new Rectangle(rectangleWidthInput.value, rectangleHeightInput.value);
});

squareBtn.addEventListener('click', function(){
    var sq = new Square(squareLengthInput.value);
});

circleBtn.addEventListener('click', function() {
    var crc = new Circle(circleRadiusInput.value);
});

triangleBtn.addEventListener('click', function() {
    var tri = new Triangle(triangleHeightInput.value);
});