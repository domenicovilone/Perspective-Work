// Element to modify
var LandingPageWrapper = document.querySelector('div.landing-page');

// Trigger elements
var LandingPageBtn = document.querySelectorAll('div.content-2 div.services-wrapper button');


// States
var isOnMain = true;

// Toggle landing page wrapper
LandingPageBtn.forEach( (el,i) => el.addEventListener("click", function(){
	toggleLandingPageWrapper(i);
}));
// Visit Book 1
viewBook1.addEventListener("click", function(){
    isOnMain = false;
    revealBook1();
});



// Utility function for toggles
function isHidden(index, list, keyWord){
    console.log(index);
    return list.item(index).classList.contains(keyWord);
}




