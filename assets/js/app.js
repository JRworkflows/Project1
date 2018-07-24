// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMqQng6um5HSQ_tOfRZJjKGUIUoIgSf7g",
    authDomain: "project1-15d74.firebaseapp.com",
    databaseURL: "https://project1-15d74.firebaseio.com",
    projectId: "project1-15d74",
    storageBucket: "project1-15d74.appspot.com",
    messagingSenderId: "49586158350"
  };

firebase.initializeApp(config);

var database = firebase.database();


$('#add-train-btn').on('click', function () {

    // Grabs user input
    var inputName = $("#input-name").val().trim();
    var inputEmail = $("#input-email").val().trim();
    var inputPhone = $("#input-phone").val().trim();


    // Creates local "temporary" object for holding user input
    var userInput = {
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
    };
    // Uploads user input to the database

    database.ref().push(userInput);

    // Logs everything to console
    console.log(inputName.name);
    console.log(inputEmail.email);
    console.log(inputPhone.phone);

    // Clears all of the text-boxes
    $("#input-name").val("");
    $("#input-email").val("");
    $("#input-phone").val("");


})




var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.575764,
            lng: -121.478851
        },
        zoom: 8
    })
}