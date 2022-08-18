
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
    // let finalRange = (currentCharge*(210/100));
    console.log('journey range');

}


