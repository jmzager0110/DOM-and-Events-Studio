// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";

    takeoff.addEventListener("click", function() {
        let isConfirmed = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(isConfirmed) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
    });

    land.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
    });

    abort.addEventListener('click', function() {
        let isConfirmed = window.confirm("Confirm that you want to abort the mission.");
        if (isConfirmed) {
            flightStatus.innerHTML = "Mission Aborted"
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.left = "0px";
        }
    });

    up.addEventListener('click', function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener('click', function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    left.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });

    right.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    });



});
