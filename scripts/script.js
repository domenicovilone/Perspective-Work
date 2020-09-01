// Elements to modify
var mainPage = document.querySelector('div.main-wrapper');
var book1 = document.querySelector('.book-1-wrapper-hide');
var howToPublish = document.querySelector('div.how-it-works-wrapper');

// Trigger elements
var lpImage = document.querySelector('div.image-wrapper .img-sub-wrapper img');
var moreBtn = document.querySelector('.more-btn-1');
var backHome = document.querySelector('#back-homepage');
var viewLib = document.querySelector('#view-lib');
var learnToBtn = document.querySelector('#learnTo');
var gotItBtn = document.querySelectorAll('#got-it-btn');

// Show book1
lpImage.addEventListener("click", function(){
    showBook1();
});
moreBtn.addEventListener("click", function(){
    showBook1();
});
// Show homeage
backHome.addEventListener("click", function(){
    showHome();
});
viewLib.addEventListener("click", function(){
    showHome();
});
// Show How to publish page
learnToBtn.addEventListener("click", function(){
    showHowToPublish();
});
// Hide To to publish page
gotItBtn.forEach( (el,i) => el.addEventListener("click", function(){
	hideHowToPublish();
}));




function showBook1(){
    book1.id = "";
    setTimeout(hideMainPage, 2000);
    book1.className = "book-1-wrapper pos-trs-r";
}
function showHome(){
    mainPage.id = "";
    book1.id = "hidden";
    book1.className = "book-1-wrapper-hide pos-trs-r";
}
function showHowToPublish(){
    howToPublish.id = "";
    setTimeout(hideMainPage, 2000);
}
function hideHowToPublish(){
    mainPage.id = "";
    howToPublish.id = "hidden";
}


// Hide homepage
function hideMainPage(){
    mainPage.id = "hidden";
}




