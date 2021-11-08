var ImgName, ImgURL;
var files = [];
var reader = new FileReader();

//Select an Image Locally
function selectImage() {
    'use strict';

    document.getElementById("select").addEventListener("click", function (e) {
        console.log("The button was clicked!");

        var input = document.createElement('input');
        input.type = 'file';

        // "=>" creates an anonymous function
        input.onchange = e => {
            files = e.target.files;
            reader = new FileReader();
            reader.onload = function () {
                document.getElementById("image").src = reader.result;
            }
            reader.readAsDataURL(files[0]);
        }

        input.click();
    });
}

//Upload an Image
function uploadImage() {
    'use strict';

    document.getElementById("upload").addEventListener("click", function () {
        ImgName = document.getElementById("namebox").value;
        //Store the image into a unique folder specific to the current logged in User based on FB UID
        var uploadTask = firebase.storage().ref(firebase.auth().currentUser.uid + '/Images/' + ImgName + ".png").put(files[0]);

        uploadTask.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById("upProgress").innerHTML = 'Upload' + progress + "%";
            },

            //Error Handling
            function (error) {
                alert('Error in saving the image');
            },

            //Submitting Image Link to Firebase DB
            function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                    ImgURL = url;
                });

                firebase.database().ref('Pictures/' + ImgName).set({
                    Name: ImgName,
                    Link: ImgURL
                });

                alert('image added successfully');
            }
        );
    });
}

//Retrieve an Image
function retrieveImage() {
    document.getElementById("retrieve").addEventListener("click", function () {
        ImgName = document.getElementById("namebox").value;
        console.log(firebase.auth().currentUser.uid + '/Images/' + ImgName);
        firebase.database().ref(firebase.auth().currentUser.uid + '/Images/' + ImgName).on('value', function (snapshot) {
            document.getElementById("image").src = snapshot.val().Link;
        });
    });
}

function initializeEvents() {
    'use strict';

    selectImage();
    uploadImage();
    retrieveImage();
    console.log("I'm Running!");
}

initializeEvents();