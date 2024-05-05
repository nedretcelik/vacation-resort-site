"use strict";

window.onload = function () {
    const bookSubmitBtn = document.getElementById("bookSubmitBtn");

    const checkInDate = document.getElementById("checkInDate");
    const checkOutDate = document.getElementById("checkOutDate");

    const queenRadio = document.getElementById("queenRadio");
    const kingRadio = document.getElementById("kingRadio");
    const suiteRadio = document.getElementById("suiteRadio");

    const numberOfAdults = document.getElementById("numberOfAdults");
    const numberOfChildren = document.getElementById("numberOfChildren");

    queenRadio.onclick = getRoomRate;
    kingRadio.onclick = getRoomRate;
    suiteRadio.onclick = getRoomRate;


    checkInDate.onchange = numberOfNightsCalculation;
    checkOutDate.onchange = numberOfNightsCalculation;

    numberOfAdults.onchange = getRoomRate;
    numberOfChildren.onchange = getRoomRate;


    bookSubmitBtn.onclick = costOfStayCalculation;

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

    const queenRadio = document.getElementById("queenRadio").checked;
    const kingRadio = document.getElementById("kingRadio").checked;
    const suiteRadio = document.getElementById("suiteRadio").checked;
    const priceOfOneNight = document.getElementById("priceOfOneNight");
    const numberOfAdults = Number(document.getElementById("numberOfAdults").value);
    const numberOfChildren = Number(document.getElementById("numberOfChildren").value);
    const messageParagraph = document.getElementById("messageParagraph");


    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const checkOutDate = new Date(document.getElementById("checkOutDate").value);

    const months = ["January", "February", "March", "April","May", "June", "July", "August", "September","October", "November", "December"];


    let checkInMonth = months[checkInDate.getMonth()];
    let checkOutMonth =  months[checkOutDate.getMonth()];

    let oneDayPrice = 0;
    
  
    if(queenRadio || kingRadio) {
       if((checkInMonth == "June" || checkInMonth == "August") || (checkOutMonth == "June" || checkOutMonth == "August")) {
        oneDayPrice = 250;
       }else {
        oneDayPrice = 150;
       }
    } else if(suiteRadio) {
        if((checkInMonth == "June" || checkInMonth == "August") || (checkOutMonth == "June" || checkOutMonth == "August")) {
            oneDayPrice = 350;
        } else {
            oneDayPrice = 210;
        }
    }

    priceOfOneNight.innerText = oneDayPrice;

    /* let totalPrice = numberOfNights * oneDayPrice;
    numberOfNigtsResult.innerText = totalPrice; */

    if(
        (queenRadio && ((numberOfAdults+numberOfChildren) > 5)) ||
        (kingRadio && ((numberOfAdults+numberOfChildren) > 2))  ||
        (suiteRadio && ((numberOfAdults+numberOfChildren) > 6))
      ) {
        messageParagraph.innerText = "!!! The room you selected will not hold your party";
        messageParagraph.style.color = "red"
     
      } else {
        messageParagraph.innerText = "Avaliable";
        messageParagraph.style.color = "green"
      }





     
}


function costOfStayCalculation() {
    const numberOfNights = Number(document.getElementById("numberOfNights").value);
    const priceOfOneNight = Number(document.getElementById("priceOfOneNight").textContent);
    const noneDiscountRadio = document.getElementById("noneDiscountRadio").checked;
    const seniorDiscountRadio = document.getElementById("seniorDiscountRadio").checked;
    const militaryDiscountRadio = document.getElementById("militaryDiscountRadio").checked;
    
    const originalRoomCostInput = document.getElementById("originalRoomCostInput");
    const discountTypeInput = document.getElementById("discountTypeInput");
    const discountedRoomCostInput = document.getElementById("discountedRoomCostInput");
    const taxAmountInput = document.getElementById("taxAmountInput");
    const totalCostOfStay = document.getElementById("totalCostOfStay");

    let discountAmount = 0;

    let totalPriceOriginal = (numberOfNights * priceOfOneNight);

    if(seniorDiscountRadio) {
        discountTypeInput.innerText = "AAA/Senior (10%)"
        discountAmount = totalPriceOriginal * 0.1;
    } else if(militaryDiscountRadio) {
        discountTypeInput.innerText = "Military (20%)"
        discountAmount = totalPriceOriginal * 0.2;
    } else {
        discountAmount = 0;
    }

    originalRoomCostInput.innerText = "$" + totalPriceOriginal; // works
     

    let discountedRoomCost = totalPriceOriginal - discountAmount;
    discountedRoomCostInput.innerText = "$" + discountedRoomCost;

    let taxAmount = discountedRoomCost* 0.12;

    taxAmountInput.innerText = "$" + taxAmount.toFixed(2);

    totalCostOfStay.innerText = "$" + discountedRoomCost + taxAmount;



    


}


/* const checkInDateResult = document.getElementById("checkInDateResult");
const checkOutDateResult = document.getElementById("checkOutDateResult"); */