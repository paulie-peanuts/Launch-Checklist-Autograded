


// Write your JavaScript code here!
window.addEventListener("load", function() {
    let formSubmit = document.getElementById("formSubmit");
    let faultyItems = document.getElementById("faultyItems");
    let pilotName = document.querySelector('input[name=pilotName]');
    let copilotName = document.querySelector('input[name=copilotName]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoMass = document.querySelector('input[name=cargoMass]');

    formSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // let pickPlanet(listedPlanets) = theOne
        let theOne = pickPlanet(listedPlanets);
        // console.log(theOne)
        addDestinationInfo(document, theOne.name, theOne.diameter, theOne.star, theOne.distance, theOne.moons, theOne.image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    // add event listener test validation in live server browser. see what happens when submit and use dev tools console
    // unfamiliar errors alert is not defined. keep working towards page running and use console log to see what happening
 });