// Navigates to the login screen.
function toLogin()
{
    alert("Navigating...");
    setTimeout(() => {  window.location.assign('login.html'); }, 3000); // Waits 3 seconds for the firebase server to implement new registration before navigating.
}

// Navigates to the index screen.
function toIndex()
{
    alert("Navigating...");
    setTimeout(() => {  window.location.assign('index.html'); }, 3000); // Waits 3 seconds for firebase to retrieve user info before navigating.
}

// Navigates to the register screen.
function toRegister()
{
    alert("Navigating...");
    window.location.assign('register.html');
}

// Testing.