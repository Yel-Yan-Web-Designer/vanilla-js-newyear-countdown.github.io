/*
Todo list
- get all of the DOM days, hours, mins, secs
- create variable of current date
- create variable of new year date in string type
- turn new year date into total milliseconds by using new Date();
- turn total milliseconds into hours, mins , hours, min, secs
- display all of it on the screen
- setInterval to count time
*/

const days = document.querySelector(".days"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".mins"),
      seconds = document.querySelector(".seconds");

function countDown () {
    const currentDate = new Date();
    let newyear = '1 Jan 2023';
    let newyearDate = new Date(newyear);

    let totalseconds = Math.floor((newyearDate - currentDate) / 1000);
    let secs = totalseconds % 60;   // get secs
    let mins = Math.floor(totalseconds / 60 % 60); // get mins
    let hrs = Math.floor(totalseconds / 60 / 60 % 60); // get hrs
    let ds = Math.floor(totalseconds / 60 / 60 / 24); // get days

    days.innerHTML = formatTime(ds);
    hours.innerHTML = formatTime(hrs);
    minutes.innerHTML = formatTime(mins);
    seconds.innerHTML = formatTime(secs)
}

function formatTime (time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);

