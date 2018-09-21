//Dynamically add buttons to the page using jQuery (on page load). Store button text in an array so it can be added to later
$(document).ready(function() {
  //Declare a variable called buttonArray and set it equal to an array of strings
  var heroArray = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "The Green Lantern",
    "Iron Man"
  ];
  var i = 0;
//   var text = 

  //Loop through the array
  for (i = 0; i < heroArray.length; i++) {
    var heroButton = $("<button>");
    $("#heroButtons").append(heroButton);
    heroButton.append(heroArray[i]);
    // $("button").text(heroArray[i]);
    console.log(heroArray[i]);
    heroButton.attr("data-hero", heroArray[i]);
  }

// Adding click event listener to all buttons
  $("button").on("click", function() {
    // Grabbing and storing the data-hero property value from the button
    var hero = $(this).attr("data-hero");

    // Declare a variable called queryURL and set it equal to the GIPHY url we are accessing (using my API key here)
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      hero +
      "&api_key=pMFNRzspRKrSNfV9Xfa5kI0YpPDCi0Lo&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {
          // Creating and storing a div tag
          var heroDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var heroImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          heroImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          heroDiv.append(p);
          heroDiv.append(heroImage);

          // Prependng the heroDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(heroDiv);
        }
      });
  });
});

// $(document).on(‘click’, ‘your-div’, function (){

//When user clicks the 'Submit' button, create a new button with text equal to their input and add their input to the array

//When user clicks any button other than 'Submit', make a call to the Giphy API so that the page populates with 10 related images

// function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements
// }

// var buttons = document.createElement('buttonArray');

// // $(document).on(‘click’, buttonArray, function (){
// // };

// //use .push to add elements to the array

// //Create an array of buttons

// $('#buttons').append("buttonArray");

// $('#buttons').on('click', function() {
// });
