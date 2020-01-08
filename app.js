
  var firebaseConfig = {
    apiKey: "AIzaSyARj2EDd1e8f1Ha6ATuVXvFfNY0wEgj4w4",
    authDomain: "traingame-f3229.firebaseapp.com",
    databaseURL: "https://traingame-f3229.firebaseio.com",
    projectId: "traingame-f3229",
    storageBucket: "traingame-f3229.appspot.com",
    messagingSenderId: "605893164012",
    appId: "1:605893164012:web:1bfa457e8930308c0ddec9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var trainData = firebase.database();

  $("#submit").on("click", function() {
	event.preventDefault();

	var name = $('#nameInput').val().trim();
    var dest = $('#destInput').val().trim();
    var time = $('#timeInput').val().trim();
    var freq = $('#freqInput').val().trim();

	database.ref().push({
		name: name,
		dest: dest,
    	time: time,
    	freq: freq,
	});
	$("input").val('');
    return false;
});

//On Child Click Function
database.ref().on("child_added", function(childSnapshot){

	var name = childSnapshot.val().name;
	var dest = childSnapshot.val().dest;
	var time = childSnapshot.val().time;
	var freq = childSnapshot.val().freq;

 //Table Data
$('#currentTime').text(currentTime);
$('#trainTable').append(
		"<tr><td id='nameDisplay'>" + childSnapshot.val().name +
		"</td><td id='destDisplay'>" + childSnapshot.val().dest +
		"</td><td id='freqDisplay'>" + childSnapshot.val().freq +
		"</td><td id='nextDisplay'>" + moment(nextTrain).format("HH:mm") +
		"</td><td id='awayDisplay'>" + minsAway  + ' minutes until arrival' + "</td></tr>");
 },

function(errorObject){
    console.log("Read failed: " + errorObject.code)
});
