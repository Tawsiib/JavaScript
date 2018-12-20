var longText = document.querySelector("#long");

var shortText = document.querySelector("#short");

var result = document.querySelector("#result");

shortText.addEventListener("keypress",function(){
    var matchText = longText.value.indexOf(shortText.value);

    if( -1 === matchText ){
        result.innerHTML = `${shortText.value} was not found`;
    }
    else{
        result.innerHTML = `${shortText.value} was found at ${matchText}`;
    }
});