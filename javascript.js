$(document).ready(function() {
  //Declare a variable called buttonArray and set it equal to an array of strings
  var heroArray = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "The Green Lantern",
    "Iron Man"
  ];
//use .push to add elements to the array

  //Loop through the array and dynamically create new hero buttons
  for (i = 0; i < heroArray.length; i++) {
    var heroButton = $("<button>");
    $("#heroButtons").append(heroButton);
    heroButton.append(heroArray[i]);
    heroButton.attr("data-hero", heroArray[i]);
    console.log(heroArray[i]);
  }

// Function which runs if any button is pressed
  $("button").on("click", function() {
    // Grab and store the data-hero property value from the button using attribute method (.attr)
    var hero = $(this).attr("data-hero");

    // Declare a variable called queryURL and set it equal to the GIPHY url we are accessing (using my API key here)
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=pMFNRzspRKrSNfV9Xfa5kI0YpPDCi0Lo&limit=10";

    // Perform an AJAX request using the newly created queryURL variable
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // Function which runs after data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // Store the data from the AJAX request in a new variable called 'results'
        var results = response.data;

        // Use for loop to loop through each result item
        for (var i = 0; i < results.length; i++) {
          // Declare a variable called "heroDiv" which, when called, will dynamically create a new div
          var heroDiv = $("<div>");

          // Declare a variable called "p" which, when called, will dynamically create a new paragraph with the rating of the result (Gif)
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Declare a variable called "heroImage" which, when called, will dynamically create an image tag
          var heroImage = $("<img>");

          // Set the source attribute of the heroImage to a property from the results
          heroImage.attr("src", results[i].images.fixed_height.url);
          heroImage.attr("class", "gif");
          heroImage.attr("data-state", "still");

          // Use append method to add the newly create paragraph and image onto the end of the heroDiv
          heroDiv.append(p);
          heroDiv.append(heroImage);

          // Prepend the heroDiv to the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(heroDiv);
        }
      });
  });

    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        }
    });
});
