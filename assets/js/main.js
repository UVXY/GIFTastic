var gifs = ["cat", "dog", "bird"];

function alertMovieName() {
    var gifName = $(this).attr("data-name");

    alert(gifName);
  }

function renderButtons() {

    $("#buttonsView").empty();

    for (var i = 0; i < gifs.length; i++) {

        var a = $("<button>");
        
        a.addClass("gif");

        a.attr("data-name", gifs[i]);

        a.text(gifs[i]);

        ("#buttonsView").append(a);
    }
}

function displayGif() {

}
// $("#addGif").

$("#submitGif").on("click", function () {
    // event.preventDefault();

    // var gifs = $("#gif-input").val();
    var searchWord = $("#gifInput");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchWord;

    $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function (response) {

            var imageUrl = response.data.image_original_url;

            var catImage = $("<img>");

            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            $("#gifTastic").prepend(catImage);
            console.log(response);
            console.log(catImage);
        });
});

renderButtons();