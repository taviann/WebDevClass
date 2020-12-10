
function signIn(email, password){
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signout(){
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}


function loadSignInPage(){
	  container.innerHTML = "";
}


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
  
  
  
  
  
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	console.log("we have a user.\n" + JSON.stringify(user));
	
	//showActivities(user.email);
	
  } else {
    // No user is signed in.
	console.log("no users.");
	
	//If you wanted to change the page without it reflecting in the browser back history, you can do:
	window.location.replace('log-reg.html');
  }
  
  
  //loadSignInPage();
});
