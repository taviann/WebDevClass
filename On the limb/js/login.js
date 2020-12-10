



//main page
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAmMBqT_n83Jq-dcNVFmWgmZI9bZ2S0vxg",
    authDomain: "webpwa-8bb31.firebaseapp.com",
    databaseURL: "https://webpwa-8bb31.firebaseio.com",
    projectId: "webpwa-8bb31",
    storageBucket: "webpwa-8bb31.appspot.com",
    messagingSenderId: "472038951720",
    appId: "1:472038951720:web:5390279f9ef7d67851de1d",
    measurementId: "G-XCGXJQL0KV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  
  
  
function signIn(email, password){
	
	console.log("signing in" + email+ " " + password);
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
	window.location.replace('Gym.html');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	
	

document.getElementById('errormessage').classList.remove('hide');
setTimeout(function(){
 document.getElementById('errormessage').classList.add('hide');
}, 5000);//*/
	
	console.log("try again");
  });
}
  
function register(email, password){
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
	window.location.replace('Gym.html');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}	
  
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	console.log("we have a user.");
	window.location.replace('Gym.html');
	
  } else {
    // No user is signed in.
	console.log("no users.");
	
  }
});


/*setTimeout(function(){
 document.getElementById('errormessage').classList.remove('hide');
 //console.log("sadds");
}, 100);//*/

