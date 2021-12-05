const firebaseConfig = {
  apiKey: "AIzaSyBZtL8D2YET9L3aVgfhMoymeBA82PBSIm0",
  authDomain: "let-s-chat-88eb0.firebaseapp.com",
  projectId: "let-s-chat-88eb0",
  storageBucket: "let-s-chat-88eb0.appspot.com",
  messagingSenderId: "294325221280",
  appId: "1:294325221280:web:693ac765d9b946273b56c5",
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     
    });});}
getData();
function addroom(){
    room_name = document.getElementById("roomname").value;
    localStorage.setItem("room_name", room_name);
    
}
function logout(){
  window.location= "index.html";
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");

}