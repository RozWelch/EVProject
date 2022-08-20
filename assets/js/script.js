// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

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
  let newRange = Math.floor(currentCharge*(210/100));
  // reduct range for extra passengers by 1%
  // reduct range for Air Conditioning on by 12.2%
  // reduct range for Heating on by 9.2%

  // calculate if the journey destination is within Range 
  

  //display results
  document.getElementById("display_results").innerHTML = `The your current range is ${newRange}, 
  the number of passengers is ${numPassengers}, the Air Conditioning is ${airconOn}, the Heating is ${heatingOn}, and the final destination is ${finalDestination}.`;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}