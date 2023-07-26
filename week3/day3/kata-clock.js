var whatTimeIsIt = function(angle) {
    // 1 hour = 30 degrees angle
    let hoursAndMinutes = angle * 2; 

    // 30 degrees * 2 = 60 degrees
    // 60 / 60 = 1 hour
    let hours = Math.floor(hoursAndMinutes / 60);

    // same logic to calcule the minutes, but with modulo operator - like the lab-js-chronometer
    
    let minutes = Math.floor(hoursAndMinutes % 60);
    
    if (hours==0) {hours = "12"}
    if (hours<10) {hours = "0" + hours}
    if (minutes<10) {minutes = "0" + minutes}

    return hours + ":" + minutes;  
}