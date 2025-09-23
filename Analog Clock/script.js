let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displayTime(){
    let date = new Date();

    //Getting Hour , Min , Secs From Date
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hRotation = 30*hrs + mins/2;
    let mRotation = 6*mins;
    let sRotation = 6*secs;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);