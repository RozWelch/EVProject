// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("calculate_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function (calculate_range) {
  //prevent default action
  calculate_range.preventDefault();
  //get variables from the journey details form
  let currentCharge = document.getElementById('currcharge').value;
  let numPassengers = document.getElementById('num_passengers').value;
  let airconOn = document.getElementById('aircon').checked;
  let heatingOn = document.getElementById('heating').checked;
  let finalDestination = document.getElementById('end_destination').value;
  //open modal
  modal.style.display = "block";

  // calculate current range
  let newRange = Math.round(currentCharge*(210/100));
  // reduct range for extra passengers by 1%
   newRange = Math.round(newRange * (1-0.01*(numPassengers-1)));
  // reduct range for Air Conditioning on by 12.2%
  // reduct range for Heating on by 9.2%
  if (airconOn) {
    newRange = Math.round(newRange*(0.878));
  } else if (heatingOn) {
    newRange = Math.round(newRange*(0.908));
  }

  //display results
  document.getElementById("display_results").innerHTML = `Your current range is ${newRange} km`;

  // check where the final destination is, and the diplay journey distance
  let journeyDist
if (finalDestination === '1') {
  journeyDist = 203;
  document.getElementById("display_journeydistance").innerHTML = `Your journey distance to Limerick is ${journeyDist}km`;
} else if (finalDestination === '2') {
  journeyDist = 105;
  document.getElementById("display_journeydistance").innerHTML = `Your journey distance to Belfast is ${journeyDist}km`;
} else if (finalDestination === '3') {
  journeyDist = 258;
  document.getElementById("display_journeydistance").innerHTML = `Your journey distance to Cork is ${journeyDist}km`;
}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal it closes
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}