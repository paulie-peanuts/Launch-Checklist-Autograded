// Write your JavaScript code here!
window.addEventListener("load", function() {
    let formSubmit = document.getElementById("formSubmit");
    let faultyItems = document.getElementById("faultyItems");
    let pilotName = document.querySelector('input[name=pilotName]');
    let copilotName = document.querySelector('input[name=copilotName]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoMass = document.querySelector('input[name=cargoMass]');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.querySelector('[data-testid=fuelStatus]');
    let cargoStatus = document.querySelector('[data-testid=cargoStatus]');
    let launchStatus = document.getElementById('launchStatus');

    formSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        formSubmission(window, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    // add event listener test validation in live server browser. see what happens when submit and use dev tools console
    // unfamiliar errors alert is not defined. keep working towards page running and use console log to see what happening
 });