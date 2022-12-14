// Get the modal
const modal = document.getElementById("resultsModal");

// Get the button that opens the modal
const btn = document.getElementById("calculate_button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the calulate button, open the modal
btn.onclick = function (calculate_range) {

  //prevent default action
  calculate_range.preventDefault();
  //get variables from the journey details form
  let currentCharge = parseInt(document.getElementById('currcharge').value);
  let numPassengers = document.getElementById('num_passengers').value;
  let airconOn = document.getElementById('aircon').checked;
  let heatingOn = document.getElementById('heating').checked;
  let finalDestination = document.getElementById('end_destination').value;
  //open modal
  modal.style.display = "block";

  // calculate current range of car type
  let rangeCalculation;
  let carTypeRange = document.getElementById("cartype").innerHTML;
  if (carTypeRange === "Mini 2") {
    rangeCalculation = 210;
  }
  if (carTypeRange === "Sports 2") {
    rangeCalculation = 280;
  }
  if (carTypeRange === "Family 4") {
    rangeCalculation = 340;
  }

  let newRange = Math.round(currentCharge * (rangeCalculation / 100));
  

  // reduct range for extra passengers by 1%
  // newRange = Math.round(newRange * (1 - 0.01 * (numPassengers - 1)));
  // reduct range for Air Conditioning on by 12.2%
  // reduct range for Heating on by 9.2%
  if (airconOn) {
    newRange = Math.round(newRange * (0.878));
  } else if (heatingOn) {
    newRange = Math.round(newRange * (0.908));
  } else {
    newRange = Math.round(newRange * (1 - 0.01 * (numPassengers - 1)))
  };

  //display results
  document.getElementById("display_results").innerHTML = `Current range ${newRange} km`;

  // check where the final destination is, and the diplay journey distance
  let journeyDist;
  if (finalDestination === '1') {
    journeyDist = 203;
    document.getElementById("display_journeydistance").innerHTML = `Distance to Limerick ${journeyDist} km`;
    document.getElementById("map-iframe").src = "https://bit.ly/3e3kpUq";
  } else if (finalDestination === '2') {
    journeyDist = 105;
    document.getElementById("display_journeydistance").innerHTML = `Distance to Belfast ${journeyDist} km`;
    document.getElementById("map-iframe").src = "https://bit.ly/3wxHViL";
  } else if (finalDestination === '3') {
    journeyDist = 258;
    document.getElementById("display_journeydistance").innerHTML = `Distance to Cork ${journeyDist} km`;
    document.getElementById("map-iframe").src = "https://bit.ly/3R9H3sU";
  }

  // check if journey range is longer than current range, and if you need to recharge
  let rangeShortfall;
  if (journeyDist > newRange) {
    rangeShortfall = (journeyDist - newRange);
    document.getElementById("display_rechargemessage").innerHTML = `Journey is longer than your range, see map below for recharging points`;
  } else if (journeyDist <= newRange) {
    document.getElementById("display_rechargemessage").innerHTML = `Journey is within range. Below is a map of charging points at your destination`;
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal it closes
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};