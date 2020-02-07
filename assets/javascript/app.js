

//========== INITIALIZE FIREBASE =========
// --- web app's firebase configuration
var config = {
    apiKey: "AIzaSyAYgmHkiB6SB8bMij9DVExE5orB8n4JHh0",
    authDomain: "train-scheduler-bfa49.firebaseapp.com",
    databaseURL: "https://train-scheduler-bfa49.firebaseio.com",
    projectId: "train-scheduler-bfa49",
    storageBucket: "train-scheduler-bfa49.appspot.com",
    messagingSenderId: "208140903946",
    appId: "1:208140903946:web:cecbb597ef1952a87de1f3"
};

firebase.initializeApp(config);

// --- reference to firebase database (for convenience)
var database = firebase.database();

// ============= INITIAL VALUES: ==============
var name = "";
var destination = "";
var frequency = 0;            //in minutes
var firstTrain = 0;           //HH:mm

console.log(name, destination, frequency, firstTrain);

// ======== FUNCTION: ON,CLICK ADD TRAIN =======
// ==============================================
$("button").on("click", function (event) {

    event.preventDefault();

    name = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = parseInt($("#frequency-input").val().trim());
    firstTrain = $("#first-train-input").val().trim();

    //check click function works;
    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(firstTrain);

    // ========= SET/PUSH data to database =========

    database.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    // ==============================================


})

    // --- create <td>s for:
    // name, destination, frequency, next train time, mins away

//     var nameData = $("<td>").text(tName);
//     var destinationData = $("<td>")



//        // --- create <tr> to hold <td>s:
// var oneTrain = $("<tr>").attr("id", tName);
