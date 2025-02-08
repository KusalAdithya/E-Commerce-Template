// login change view
function changeView() {
    var logIn = document.getElementById("logIn");
    var signUp = document.getElementById("signUp");

    logIn.classList.toggle("d-none");
    signUp.classList.toggle("d-none");
    logIn.classList("row mt-4 logIn");
    signUp.classList("row mt-4 signUp");

}

function signIn() {
    window.location = "home.html";
}

function singleProductView() {
    window.location = "singleProductView.html";
}

function signInAdmin() {
    window.location = "adminDashboard.html";

}