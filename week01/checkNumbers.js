function checkNumbers() {
    var someNumbers = [25, 11, -2, 14, "blue", -1, -10, 0];

    // loop through array to handle various array values
    for(var i = 0; i < 8; i ++) {
        var numberAsText = someNumbers[i];
        var aNumber = parseInt(numberAsText);
        if(numberAsText != "" && !isNaN(aNumber)) {
            var remainder = Math.abs(aNumber % 2);
            // handles case of even number
            if(aNumber != 0 && remainder == 0) {
                document.getElementById("result_numbers").innerHTML += "<p>" + aNumber + " is even.</p>";
            
            // handles case of odd number
            } else {
                document.getElementById("result_numbers").innerHTML += "<p>" + aNumber + " is odd.";
            }
        
        // handles case of zero number
        } else if (aNumber == 0) {
            document.getElementById("result_numbers").innerHTML += "<p>0 is neither even nor odd.</p>";
        } else {
                document.getElementById("result_numbers").innerHTML += "<p>'" + someNumbers[i] + "' is not a number. Please enter a number.</p>";
        }
    }
}