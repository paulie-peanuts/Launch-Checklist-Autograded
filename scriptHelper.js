// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput.length === 0) {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        window.alert("All fields are required!")
    } else if (validateInput(copilot) === "Is a Number" || validateInput(pilot) === "Is a Number") {
        window.alert("Pilot and Co-pilot Names must be strings!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Fuel Level and Cargo Mass must be numbers!");
    }  else {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level ${(fuelLevel < 10000) ? "too low" : "high enough"} for launch`;
        cargoStatus.innerHTML = `Cargo mass ${(cargoLevel > 10000) ? "too heavy" : "low enough"} for launch`;
        fuelLevel < 10000 || cargoLevel > 10000 ? launchStatus.style.color = "red" : launchStatus.style.color = "green"
    }
    // this is the definition not the fucniton call
    // takes in parameters
    // document parameter, input from form, and a paramter that reps html element list final launch checklist
    // does not allow empty field, should give window alert
    // polot and oc should be strings other numbers, gfives window alert that gives feedbak about expeted inputs
    // use validate input to help with this
    // if it passes this round of validaiton then user inputs are good and can move on
    // still in form submission but determining output based on mass
    // shuttle ready for launch changes on input but nothing else
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;