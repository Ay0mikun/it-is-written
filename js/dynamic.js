/*The 'generate' function takes the user's text/color input and stores them as 'one' and 'two' respectively
    * whatever 'one' is, it is used to replace the html text in 'supertext'*/
    
    function generate() {
        var text = document.getElementById("sampleText").value;
        var color = document.getElementById("sampleColor").value;

        document.getElementById("writing").innerHTML = text;
    }

    /*Reset the form to the original text*/
    function reset() {
        document.getElementById("writing").innerHTML = "Sample Text Here.";
        document.getElementById("writing").style.color = "white";
    }