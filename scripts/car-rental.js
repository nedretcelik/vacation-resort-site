"user strict";



window.onload = function init() {
    const estimateButton = document.getElementById("estimateButton");

    const pickupDate = document.getElementById("pickupDateInput");
    pickupDate.min = new Date().toISOString().split("T")[0];

    estimateButton.onclick = estimateTotalCost;

    

    
}


function estimateTotalCost() {
    const pickupDate = document.getElementById("pickupDateInput");
    const numberOfDays = Number(document.getElementById("numberOfDaysInput").value);

    const tollTagCheckbox = document.getElementById("tollTagCheckbox").checked;
    const gpsCheckbox = document.getElementById("gpsCheckbox").checked;
    const roadsideCheckbox = document.getElementById("roadsideCheckbox").checked;

    const under25No = document.getElementById("under25No").checked;
    const under25Yes = document.getElementById("under25Yes").checked;

    const carTotalTD = document.getElementById("carTotalTD");
    const optionsTotalTD = document.getElementById("optionsTotalTD");
    const under25totalTD = document.getElementById("under25totalTD");
    const totalDueTD = document.getElementById("totalDueTD");


    const carRental = 29.99;

    let carRentalTotal = carRental * numberOfDays;
    carTotalTD.innerText = carRentalTotal;
    console.log(carRentalTotal)

    let optionPerday = 0;

    if(tollTagCheckbox) {
        optionPerday += 3.95;
    }
    if(gpsCheckbox) {
        optionPerday += 2.95;
    }
    if(roadsideCheckbox) {
        optionPerday += 3.95;
    }

    let optionsTotal = optionPerday * numberOfDays;
    
    optionsTotalTD.innerText = optionsTotal.toFixed(2);

    let underAgeTotal = 0;

    if(under25Yes) {
        underAgeTotal +=  carRental * 0.3;
    }
 
    under25totalTD.innerText = underAgeTotal

    let totalDue = carRentalTotal + optionsTotal + underAgeTotal;

    totalDueTD.innerText = totalDue;


    const displayTable = document.getElementById("displayTable");

    if (displayTable.style.display === "none") {
        displayTable.style.display = "block";
    } else {
        displayTable.style.display = "none";
    }
   

}; 

































/* "use script";
      window.onload = function init() {
        const pickupDateInput = document.getElementById("pickupDateInput");
        const tollTagCheckbox = document.getElementById("tollTagCheckbox");
        const under25Yes = document.getElementById("under25Yes");
        const under25No = document.getElementById("under25No");
        const estimateButton = document.getElementById("estimateButton");
        estimateButton.onclick = estimate;

        function estimate() {
          if (tollTagCheckbox.checked) {
            console.log("checked");
          } else {
            console.log("not checked");
          }

          if (under25Yes.checked) {
            console.log("Yes");
          }

          if (under25No.checked) {
            console.log("No");
          }
        }


      }; */