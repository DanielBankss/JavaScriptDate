const clock = document.getElementById('clock');

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    return time;
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function getDate() {
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dateNumber = date.getDate();
    return day + ' / ' + dateNumber + ' ' + month + ' / ' + year;
}

clock.innerHTML = getTime() + '\t' + getDate();

setInterval(function() {
    const time = getTime();
    const date = getDate();
    clock.innerHTML = time + '\t' + date;
}, 1000);