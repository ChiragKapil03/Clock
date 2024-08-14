
function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, make it 12 (12 AM/PM)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('amPm').textContent = amPm;
    if(amPm === 'AM'){
        if(hours>=0 && hours<6){
            document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/33/f3/bd/33f3bda341b51f505bb54f10b5e83b2f.jpg')";
            document.getElementById('theme').innerText = "Theme: Night";
        }
        else if(hours>=6 && hours<=9){
            document.body.style.backgroundImage = "url('https://s1.1zoom.me/b5050/11/England_Morning_Mountains_Sunrises_and_sunsets_607117_2560x1440.jpg')";
            document.getElementById('theme').innerText = "Theme: Morning";
        }
        else{
            document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/029/096/687/large_2x/beautiful-hills-mountain-and-river-view-with-snowfall-lake-and-winter-sunny-day-background-ai-generated-free-photo.jpg')";
            document.getElementById('theme').innerText = "Theme: Day";
        }
    }
    else{
        if(hours>=0 && hours<4){
            document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/029/096/687/large_2x/beautiful-hills-mountain-and-river-view-with-snowfall-lake-and-winter-sunny-day-background-ai-generated-free-photo.jpg')";
            document.getElementById('theme').innerText = "Theme: Day";
        }
        else if(hours>=4 && hours<=8){
            document.body.style.backgroundImage = "url('https://c.wallhere.com/photos/12/d8/lake_sunset_mountains_forest_sky_water_snow_reflection-107864.jpg!d')";
            document.getElementById('theme').innerText = "Theme: Evening";
        }
        else{
            document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/33/f3/bd/33f3bda341b51f505bb54f10b5e83b2f.jpg')";
            document.getElementById('theme').innerText = "Theme: Night";
        }
    }
}

setInterval(updateClock, 1000);
updateClock();