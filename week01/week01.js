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

function loadStory() {
    // assign the value of the element name_input to storyName
    var storyName = document.getElementById("name_input").value;

    // assign the value of storyName from local storage to storyHTML
    var storyHTML = localStorage.getItem(storyName);

    // assign the value of storyHTML to the value of the element of ID story_editor
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
    // assign the value of the element of ID name_input to storyName
    var storyName = document.getElementById("name_input").value;

    // assign the value of the element of id story_editor to storyHTML
    var storyHTML = document.getElementById("story_editor").value;

    // assign the value of storyHTML to the storyName
    localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
    // assign the value of the element with ID story_editor to storyHTML
    var storyHTML = document.getElementById("story_editor").value;

    // assign the value of storyHTML to the value of the element of ID story_display
    document.getElementById("story_display").innerHTML = storyHTML;
}