// function showCongratulations(theButtonClicked) {
//     document.getElementById("result_display").innerHTML = "Congratulations, you did it! <p>You got the page to update!</p>";
//     theButtonClicked.innerHTML = "Click Me Again";
// }

function showCongratulations(theButtonClicked) {
    var x = document.getElementById("result_display");
    // alert("display: " + x);

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        theButtonClicked.innerHTML = "Click Me Again";
        document.getElementById("result_display").innerHTML = "Congratulations, you did it! <p>You got the page to update!</p>";
    }
}