var rectangleBtn = document.getElementById('rectangle-btn');
var squareBtn = document.getElementById('square-btn');
var circleBtn = document.getElementById('circle-btn');
var triangleBtn = document.getElementById('triangle-btn');

var rectangleWidthInput = document.getElementById('rectangle-width');
var rectangleHeightInput = document.getElementById('rectangle-height');
var squareLengthInput = document.getElementById('square-length');
var circleRadiusInput = document.getElementById('circle-radius');
var triangleHeightInput = document.getElementById('triangle-height');

var sidePanelName = document.getElementById('sidepanel-name');
var sidePanelWidth = document.getElementById('sidepanel-width');
var sidePanelHeight = document.getElementById('sidepanel-height');
var sidePanelRadius = document.getElementById('sidepanel-radius');
var sidePanelArea = document.getElementById('sidepanel-area');
var sidePanelPerimeter = document.getElementById('sidepanel-perimeter');

var Shape = function(shapeName) {
    this.shapeName = shapeName;
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
    sidePanelName.innerText = 'Shape Name: ' + this.shapeName;
    sidePanelWidth.innerText = 'Width: ' + this.width;
    sidePanelHeight.innerText = 'Height: ' + this.height;
    sidePanelRadius.innerText = 'Radius: ' + this.radius;
    sidePanelArea.innerText = 'Area: ' + this.area;
    sidePanelPerimeter.innerText = 'Perimeter ' + this.perimeter;
}

var Rectangle = function(width, height) {
    Shape.call(this, 'rectangle');
    this.width = width;
    this.height = height;
    this.area = this.area();
    this.perimeter = this.perimeter();
    this.div.style.width = width + 'px';
    this.div.style.height = height + 'px';
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function() {
    return 2 * (Number(this.width) + Number(this.height));
}

var Square = function(length) {
    Shape.call(this, 'square');
    this.width = length;
    this.height = length;
    this.area = this.area();
    this.perimeter = this.perimeter();
    this.div.style.width = length + 'px';
    this.div.style.height = length + 'px';
};
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function() {
    return this.width * this.width;
}
Square.prototype.perimeter = function() {
    return 4 * this.width;
}

var Circle = function(radius) {
    Shape.call(this, 'circle');
    this.radius = radius;
    this.width = this.diameter();
    this.height = this.diameter();
    this.area = this.area();
    this.perimeter = this.perimeter();
    this.div.style.width = this.diameter() + 'px';
    this.div.style.height = this.diameter() + 'px';
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
    return 2 * this.radius;
}
Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius;
}

var Triangle = function(height) {
    Shape.call(this, 'triangle');
    this.width = height;
    this.height = height;
    this.area = this.area();
    this.perimeter = this.perimeter();
    this.div.style.borderBottom = height + 'px solid yellow';
    this.div.style.borderRight = height + 'px solid transparent';
};
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function() {
    return 0.5 * this.width * this.height;
}
Triangle.prototype.perimeter = function() {
    return 2 * this.height + Number(Math.sqrt(2 * Math.pow(this.height, 2)));
}

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