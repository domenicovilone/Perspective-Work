// Element to modify
var infoWrapper = document.querySelectorAll('div.info div.info-wrapper');


// Trigger elements
var infoBtn = document.querySelectorAll('div.info .btn');

infoBtn.forEach( (el,i) => el.addEventListener("click", function(){
	toggleInfoWrapper(i);
}));

// Toggles infoWrapper
function toggleInfoWrapper(index){
    console.log("hello");

    if (infoWrapper.item(index).className == "info-wrapper info-hide transform-2") {
        infoWrapper.item(index).className = "nfo-wrapper info-show transform-2";
    } else {
        infoWrapper.item(index).className = "info-wrapper info-hide transform-2";
    }
}