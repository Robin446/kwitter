
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCZMXyenjI3hwmIuy2DiJ53DZq7Ng5cjrY",
      authDomain: "kwitter-23296.firebaseapp.com",
      databaseURL: "https://kwitter-23296-default-rtdb.firebaseio.com",
      projectId: "kwitter-23296",
      storageBucket: "kwitter-23296.appspot.com",
      messagingSenderId: "1039482115325",
      appId: "1:1039482115325:web:b1c6055a8cc36f077b5a94"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//    const app = initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom(){
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onClick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}