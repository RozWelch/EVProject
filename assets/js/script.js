
// prevent default sumbit action and call handleSubmit function

document.getElementById('submit-button').addEventListener('click', function(event) {
    handleSubmit(event)
});


// take entries from the form and caluclate range distance in km
function handleSubmit(event) {
    
    event.preventDefault();

    // Get the input elements
    let currentCharge = document.getElementById('currcharge');
    let numPassengers= document.getElementById('num_passengers');
    let airConOn = document.getElementById('aircon');
    let heatingOn= document.getElementById('heating');
    let endDestination= document.getElementById('end-destination');

    // Calculate the range
    // add my final range caluclation here
    location.href = "results.html";
    document.getElementById("your_selection").innerHTML = `You selected ${currentCharge} % current charge, and ${numPassengers} passangers, going to ${endDestination}.`;
    
}


