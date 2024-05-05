"use strict";

window.onload = function () {
    const bookSubmitBtn = document.getElementById("bookSubmitBtn");
    const checkInDate = document.getElementById("checkInDate");
    const checkOutDate = document.getElementById("checkOutDate");


    checkInDate.onchange = numberOfNightsCalculation;
    checkOutDate.onchange = numberOfNightsCalculation;


    bookSubmitBtn.onclick = getRoomRate;

}


function numberOfNightsCalculation() {
    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const checkOutDate = new Date(document.getElementById("checkOutDate").value);
    const numberOfNights = document.getElementById("numberOfNights");


    let msecPerDay = 1000 * 60 * 60 * 24;
    let elapsedMilliseconds = checkOutDate.getTime() - checkInDate.getTime()

    let dayDiff = elapsedMilliseconds / msecPerDay;

    
    numberOfNights.value = dayDiff;

    return numberOfNights.value;

}

function getRoomRate() {
    
 

}
