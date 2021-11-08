var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();

// Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCzWFqqY0iqx1eXd9uXLD2ELsoE-OiLvuw",
//     authDomain: "feedback-2d8bd.firebaseapp.com",
//     projectId: "feedback-2d8bd",
//     storageBucket: "feedback-2d8bd.appspot.com",
//     messagingSenderId: "85959730833",
//     appId: "1:85959730833:web:56618073e1f6898c55c130"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Trigger File Dialog onClick of the Select Button
// document.getElementById("select").onclick = function (e) {
//     var input = document.createElement('input');
//     input.type = 'file';
//     input.click();

//     input.onchange = e => {
//         files = e.target.files;
//         reader = new FileReader();
//         reader.onload = function () {
//             document.getElementById("image").src = reader.result;
//         }
//         reader.readAsDataURL(files[0]);
//     }
//     input.click();
// }

function selectImage() {
    'use strict';

    document.getElementById("select").addEventListener("click", function (e) {
        console.log("The button was clicked!");
        //e.preventDefault();

        var input = document.createElement('input');
        input.type = 'file';
        input.click();

        input.onchange = e => {
            files = e.target.files;
            reader = new FileReader();
            reader.onload = function () {
                document.getElementById("image").src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }
        //input.click();
    });
}

function initializeEvents() {
    'use strict';

    selectImage();
    console.log("I'm Running!");
}

initializeEvents();