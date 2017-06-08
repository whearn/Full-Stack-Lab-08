var rectangleBtn = document.getElementById('rectangle-btn');
var squareBtn = document.getElementById('square-btn');
var circleBtn = document.getElementById('circle-btn');
var triangleBtn = document.getElementById('triangle-btn');

function Shape() {

}

rectangleBtn.addEventListener('click', function() {
    console.log('rect');
});

squareBtn.addEventListener('click', function(){
    console.log('square');
});

circleBtn.addEventListener('click', function() {
    console.log('circle');
});

triangleBtn.addEventListener('click', function() {
    console.log('tri');
});