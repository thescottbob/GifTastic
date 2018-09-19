//Dynamically add buttons to the page using jQuery (on page load). Store button text in an array so it can be added to later

    //Declare a variable called buttonArray and set it equal to an array of strings
    var buttonArray = ['Superman', 'Batman', 'Wonder Woman', 'The Green Lantern', 'Iron Man'];
    var i = 0;

    //Create a for loop to loop through the array
    for(i = 0; i < buttonArray.length; i++) {
        $('#buttonArray').append(i);
        console.log(i);
    };

//When user clicks the 'Submit' button, create a new button with text equal to their input and add their input to the array


//When user clicks any button other than 'Submit', make a call to the Giphy API so that the page populates with 10 related images



function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements 
}

var buttons = document.createElement('buttonArray');

// $(document).on(‘click’, buttonArray, function (){
// };


//use .push to add elements to the array

//Create an array of buttons

$('#buttons').append("buttonArray");

// $('#buttons').on('click', function() {
// });



