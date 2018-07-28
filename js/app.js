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

function validateContact(customerContact) {
   if (!customerContact.name) {
    return (false) }
}
// attempted reg ex data validation 
// !!(new RegExp('^\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}$').exec('(345)949-0494'))

//function for cleaning up customer entered input (phone number)
function cleanUpPhoneInput(telly) {
    var cleanPhoneNumer = ""
    for (var i = 0; i < telly.length; i++) {
        if ('0123456789'.indexOf(telly[i]) !== -1) {
            cleanPhoneNumer += telly[i]
        }
    } 
    if (cleanPhoneNumer.length != 10) {
        return (false)
    }
    var dbPhoneNumber = "("+ cleanPhoneNumer.substr(0,3) + ") " + cleanPhoneNumer.slice(3,6) + "-" + cleanPhoneNumer.slice(6,10) 
    return dbPhoneNumber
}


$('#customer-form').on('submit', function () {

    // Grabs user input
    var inputName = $("#input-name").val().trim();
    var inputEmail = $("#input-email").val().trim();
    var inputPhone = $("#input-phone").val().trim();
    var cleanedPhone = cleanUpPhoneInput(inputPhone)
    if (!cleanedPhone) {
        return false;
    }
    // Creates local "temporary" object for holding user input
    var userInput = {
        name: inputName,
        email: inputEmail,
        phone: cleanedPhone,

    };
    // Uploads user input to the database

    database.ref().push(userInput);

    // Logs everything to console
    console.log(inputName.name);
    console.log(inputEmail.email);
    console.log(cleanedPhone.phone);



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