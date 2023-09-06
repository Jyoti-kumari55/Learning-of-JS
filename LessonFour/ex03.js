var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input");
var outputdiv = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslate(input){
    return serverUrl + "?" + "text=" + input;
}

//Error handling
function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the server! Try again after sometime");

}

function clickEventHandler(){
     console.log("Clicked")
   console.log("input: ", textInput.value);

        var inputText = textInput.value;

            fetch(getTranslate(inputText))
             .then((response) => response.json())
             .then((data) => {
                var translateddfText = data.contents.translated;
                outputdiv.innerText = translateddfText;
            })
            .catch(errorHandler);

 };
btnTranslate.addEventListener("click", clickEventHandler);
    

