// Element to modify
var LandingPageWrapper = document.querySelectorAll('div.landing-page');
var MainWrapper = document.querySelectorAll('div.wrapper-main');
var libWrapper = document.querySelector('div.lib-wrapper');
var bookDetailsWrapper = document.querySelector('div.book-details-wrapper');

// Trigger elements
var LandingPageBtn = document.querySelectorAll('div.landing-page p');
var viewBook1 = document.querySelector('#view-book');
var colorThemeBtn = document.querySelectorAll('.color-theme');

// Toggle landing page wrapper
LandingPageBtn.forEach( (el,i) => el.addEventListener("click", function(){
	toggleLandingPageWrapper(i);
}));
// Visit Book 1
viewBook1.addEventListener("click", function(){
    revealBook1();
});
// Change background color
colorThemeBtn.forEach( (el,i) => el.addEventListener("click", function(){
	toggleBgdColor(i);
}));


// Toggles infoWrapper
function toggleLandingPageWrapper(index){
    LandingPageWrapper.item(index).className = "landing-page smooth-slide-up";
    MainWrapper.item(index).className = "wrapper-main smooth-slide-up-main-wrapper";

    document.querySelector('body').style.overflow = "visible";
}
function revealBook1(){
    scrollToTop();

    libWrapper.className = "lib-wrapper hidden";
    bookDetailsWrapper.className = "book-details-wrapper";
}
// Utility function for revealBook1
function scrollToTop(){
    window.scrollTo(0,0);
}
// Set background color main
function toggleBgdColor(index){
    if (index === 0){ MainWrapper.item(0).style.backgroundColor = "var(--white)"; }
    else if (index === 1){ MainWrapper.item(0).style.backgroundColor = "var(--baby-yellow)"; }
    else if (index === 2){ MainWrapper.item(0).style.backgroundColor = "var(--baby-red)"; }
}

