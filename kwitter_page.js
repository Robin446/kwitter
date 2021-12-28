//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCZMXyenjI3hwmIuy2DiJ53DZq7Ng5cjrY",
      authDomain: "kwitter-23296.firebaseapp.com",
      databaseURL: "https://kwitter-23296-default-rtdb.firebaseio.com",
      projectId: "kwitter-23296",
      storageBucket: "kwitter-23296.appspot.com",
      messagingSenderId: "1039482115325",
      appId: "1:1039482115325:web:b1c6055a8cc36f077b5a94"
    };
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

function Send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:username,
                  message:message,
                  like:0
            }
      );
      document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class = 'user_tick' src = 'tick.png'></h4>"
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>"
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes)+1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      })
}

function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}