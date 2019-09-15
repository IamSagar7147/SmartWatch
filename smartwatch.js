// Different colored watch belts
var beltBlack = "https://i.imgur.com/iOeUBV7.png";
var beltRed = "https://i.imgur.com/PTgQlim.png";
var beltPurple = "https://i.imgur.com/xSIK4M8.png";
var beltPink = "https://i.imgur.com/Mplj1YR.png";

// vars of color buttons
var watch = document.getElementById('watch-img');
var black = document.getElementById('black');
var red = document.getElementById('red');
var purple = document.getElementById('purple');
var pink = document.getElementById('pink');

black.onclick = function() {
    watch.src = beltBlack;
}

red.onclick = function() {
    watch.src = beltRed;
}

purple.onclick = function() {
    watch.src = beltPurple;
}

pink.onclick = function() {
    watch.src = beltPink;
}


function currentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById(timeStamp-div).innerHTML = +hours+":"+minutes+":"+seconds;
    setTimeout(function(){currentTime()}, 1000);
}

currentTime();


//Storing ID's of the Time and Heart Rate buttons
// var heartButton = document.getElementById('heart-btn');
// var timeButton = document.getElementById('time-btn');

// //Storing ID's of the Time and Heart Rate blocks
// var heartDiv = document.getElementById('heart-div');
// var timeDiv = document.getElementById('timeStamp-div');

// heartButton.onclick = function() {
//     heartDiv.style.display = 'block';
//     timeDiv.style.display = 'none';
// }

// timeButton.onclick = function() {
//     heartDiv.style.display = 'none';
//     timeDiv.style.display = 'block';
// }