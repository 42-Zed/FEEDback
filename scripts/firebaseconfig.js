var firebaseConfig = {
  apiKey: "AIzaSyCzWFqqY0iqx1eXd9uXLD2ELsoE-OiLvuw",
  authDomain: "feedback-2d8bd.firebaseapp.com",
  projectId: "feedback-2d8bd",
  storageBucket: "feedback-2d8bd.appspot.com",
  messagingSenderId: "85959730833",
  appId: "1:85959730833:web:56618073e1f6898c55c130"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Registers the user through Firebase method "createUserWithEmailAndPassword()".
function register() {

var email = document.getElementById("emailInput");
var password = document.getElementById("passwordInput");

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));

alert("Registering...");

}

// logs the user in through Firebase method "signInWithEmailAndPassword()".
function login() {

var email = document.getElementById('emailInput');
var password = document.getElementById('passwordInput');

const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));

}

// Logout method to terminate user authorization.
function logout() {

    auth.signOut();
    alert("Logging out...");

}

// Constantly checks if a user is currently signed in.
auth.onAuthStateChanged(function(user) {

if(user){
    var email = user.email;
    alert("Active User " + email);
}else{
    alert("No active user");
}

});