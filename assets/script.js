	var config = {
	apiKey: "AIzaSyAtaIFM7i-WpdUj5Mcs0iU3nTql9Y6h4ck",
	authDomain: "traintable-5ecd2.firebaseapp.com",
	databaseURL: "https://traintable-5ecd2.firebaseio.com",
	projectId: "traintable-5ecd2",
	storageBucket: "",
	messagingSenderId: "572205231806"
	};
	firebase.initializeApp(config);
	var database = firebase.database();




	$("#addtime").on("click", function(event) {
		
		event.preventDefault();

		var train = $("#traininput").val().trim();
		var destination = $("#destination-input").val().trim();
		var frequency = $("#frequency-input").val().trim();
           

		firebase.database().ref().push ({
              train: train,
              destination: destination,
              frequency: frequency
		});

	// database.ref().on("child_added", function(childSnapshot) {
	// 	var trainname = childSnapshot.val().train;
	// 	var traindestination = childSnapshot.val().destination;
	// 	var trainfrequency = childSnapshot.val().frequency;

	// 	});
	// });


	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

		var trainname = childSnapshot.val().train;
		var traindestination = childSnapshot.val().destination;
		var trainfrequency = childSnapshot.val().frequency;

  // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
  // // Calculate the months worked using hardcore math
  // // To calculate the months worked
  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);
  // // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);


  		var currentTime = moment().format("hh:mm a");
  		var modfreq = moment().add(trainfrequency, 'm');


  		console.log("FREQ" +modfreq);

		

  // 		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	 //  	var tRemainder = diffTime % tFrequency;
		// var tMinutesTillTrain = currentTime - modfreq;
		// var nextTrain = moment().add(tMinutesTillTrain, "m");
		var tMinutesTillTrain = "";
		var nextTrain = "";

		console.log("CURRENTTIME"+currentTime)
		// console.log("MINUTESTILL"+tMinutesTillTrain)
		console.log("NEXTTRN"+modfreq)


  $("#traintable > tbody").append("<tr><td>" + trainname + "</td><td>" + traindestination + "</td><td>" +
  trainfrequency + "</td><td>" + tMinutesTillTrain + "</td><td>" + nextTrain + "</td></tr>");
});

	});