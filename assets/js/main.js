// starting array
var gifs = ["SpongeBob", "Hey Arnold", "Fairly Odd Parents", "Ed Edd n Eddy"];

// displaygifInfo function re-renders the HTML to display the appropriate content
function displaygifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Creating an AJAX call for the specific gif button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);

        console.log(response);
        // Creating a div to hold the gif
        var gifDiv = $("<div class='gif'>");

        var results = response.data;

        // Creating an element to have the rating displayed
        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var image = $("<img>");

            image.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(image);

            $("#gif-view").prepend(gifDiv);
        }
    });
}

// Function for displaying gif data
function renderButtons() {

    // Deleting the gifs prior to adding new gifs
    $("#buttons-view").empty();

    for (var i = 0; i < gifs.length; i++) {

         var a = $("<button>");
        
        a.addClass("movie-btn");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $("#buttons-view").append(a);
    }
}

// This function handles events where a gif button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();

    gifs.push(gif);

    renderButtons();
});

// putting it together
$(document).on("click", ".movie-btn", displaygifInfo);

renderButtons();