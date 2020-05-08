
// Elements to modify
var scorecards = document.querySelectorAll('.score-cards');
var plusminusContainer = document.querySelectorAll('.plus-minus-container');
var points = document.querySelectorAll('input[type=number]');
var bgdSelect = document.querySelectorAll('.bgd-select');
var description = document.querySelectorAll('.description-container');
var descriptionP = document.querySelectorAll('.description-container p');
var books = document.querySelectorAll('.book');
var collapse = document.querySelectorAll('.collapse');
var collapseP = document.querySelectorAll('.collapse-p');
var info = document.querySelectorAll('.info');
var titles = document.querySelectorAll('.titles');
var bookTitle = document.querySelectorAll('.selection p');
var infoContainer = document.querySelectorAll('.info-intro');
var infoIntroBooks = document.querySelectorAll('.info-intro .books');
var infoIntroScorecard = document.querySelectorAll('.info-intro .scorecard');

var container = document.querySelectorAll('.container');
var booklistContainer = document.querySelectorAll('.booklist');
var aboutContainer = document.querySelectorAll('.about');

// Event buttons
var xButton = document.querySelectorAll('.x-return');
var xReturn = document.querySelectorAll('.x-return svg');
var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var slider = document.querySelectorAll('#slider');
var bookList = document.querySelectorAll('.showcase img');
var readThisBook = document.querySelectorAll('.read .button');
var infoIntroScorecardBtn = document.querySelectorAll('.left-q');
var infoIntroBooksBtn = document.querySelectorAll('.right-q');
var closeInfoBtn = document.querySelectorAll('.close-info-btn');

var xCloseScorecard = document.querySelectorAll('.x-close svg');
var xCloseBooklist = document.querySelectorAll('.close-booklist-btn');

var scorecardButton = document.querySelectorAll('.action-container .left');
var booksButton = document.querySelectorAll('.action-container .right');
var aboutButton = document.querySelectorAll('.menu');


// Handles description open & close
xReturn.forEach( (el,i) => el.addEventListener("click", function(){
	hideDescription(i);
}));
books.forEach( (el,i) => el.addEventListener("click", function(){
	showDescription(i);
}));
// Handles scorecards collpase & open
collapse.forEach( (el, i) => el.addEventListener("click", function(){
	if (collapseP.item(i).innerHTML === "Close") {
		collapseCard(i);
	} else if (collapseP.item(i).innerHTML == "Open"){
		Open(i);
	}
}));
// Handles points
plus.forEach( (el, i) => el.addEventListener("click", function(){
	console.log(plus.length);
	addPoint(i);
}));
minus.forEach( (el, i) => el.addEventListener("click", function(){
	removePoint(i);
}));
// Handles the sliders
slider.forEach( (el, i) => el.addEventListener("input", function(){
	sliderMove(i);
}));
// Handles titles
books.forEach( (el, i) => el.addEventListener("mouseover", function(){
	displayTitle(i);
}));
books.forEach( (el, i) => el.addEventListener("mouseout", function(){
	hideTitle(i);
}));
// Handles show description from booklist section
readThisBook.forEach( (el, i) => el.addEventListener("click", function(){
	selectDescrption();
}));
// Handles show & hide info-intro on intro page
infoIntroScorecardBtn.forEach( (el, i) => el.addEventListener("click", function(){
	showIntroScorecard();
}));
infoIntroBooksBtn.forEach( (el, i) => el.addEventListener("click", function(){
	showIntroBooks();
}));
closeInfoBtn.forEach( (el, i) => el.addEventListener("click", function(){
	hideIntro(i);
}));

// Go to About || Close About
aboutButton.forEach( (el, i) => el.addEventListener("click", function(){
	aboutUs(i);
}));
// Go to scorecards
scorecardButton.forEach( (el, i) => el.addEventListener("click", function(){
	startPlaying(i);
}));
// Go to Books
booksButton.forEach( (el, i) => el.addEventListener("click", function(){
	readBooks(i);
}));
// Close Books / About / Scorecards
xCloseScorecard.forEach( (el, i) => el.addEventListener("click", function(){
	closeScorecards(i);
}));
xCloseBooklist.forEach( (el, i) => el.addEventListener("click", function(){
	closeBooks(i);
}));

// Select a book from booklist
bookTitle.forEach((el, i) => el.addEventListener("click", function(){
	selectBook(i);
}));


// show book utility function
// Selects which book description to show
// calls showDescription witht the good index
function selectDescrption(){
	// console.log("booklist item src: " + bookList.item(0).classList.item(0));
	var j = 0;
	var selected = false;

	
	while (j<bookList.length && !selected){
		if(bookList.item(j).classList.contains('show-book')){
			showDescription(j);
			selected = true;
		}
		j++;
	}
	if (!selected) { showDescription(0);}
}
// show book
function showDescription(index) {
	var cardIdNb = index + 1;
	var transformClassName = "transform-" + cardIdNb;

	scorecards.item(index).id = "score-cards";
	xButton.item(index).id = "x-return";
	bgdSelect.item(index).id = "bgd-select";
	description.item(index).id = "description-container";
	collapse.item(index).id = "display-none";
	aboutButton.item(0).id = "display-none";

	// remove transform effect
	scorecards.item(index).classList.remove(transformClassName);
	// sets slider to 0
	slider.item(index).value = 0;
	// set/reset description fSize to 1.2em
	resetFSize(index);

	revert(index);
}
// hide book
function hideDescription(index) {
	var cardIdNb = index + 1;
	var transformClassName = "transform-" + cardIdNb;
	// Make about button appear on top again
	aboutButton.item(0).id = "";

	for (var i=0; i<9; i++){
		scorecards.item(i).id = "";
		xButton.item(i).id = "";
		bgdSelect.item(i).id = "";
		description.item(i).id = "";
		collapse.item(i).id = "";
	}
	scorecards.item(index).classList.add(transformClassName);
	// sets slider to 50
	slider.item(index).value = 50;
}
// enables having two descriptions open
function revert(index) {
	for(var i=0; i<9; i++){
		if(i != index){
			scorecards.item(i).id="display-none";
		}
	}
}

// Collapse scorecard
function collapseCard(index) {
	scorecards.item(index).id = "collapse";
	collapseP.item(index).innerHTML = "Open";
	collapse.item(index).id = "collapse-p";

	slider.item(index).id = "display-none";
	books.item(index).id = "display-none";
	points.item(index).id = "display-none"
	info.item(index).id = "display-none";
	plusminusContainer.item(index).id = "display-none";
}
function Open(index){
	scorecards.item(index).id = "";
	collapseP.item(index).innerHTML = "Close";
	collapse.item(index).id = "";

	slider.item(index).id = "";
	books.item(index).id = "";
	points.item(index).id = ""
	info.item(index).id = "";
	plusminusContainer.item(index).id = "";
}

// adds point to player
function addPoint(index){
	if (points.item(index).value < 100000) {

		points.item(index).value++;
	}
}
// removes point from player
function removePoint(index){
	if (points.item(index).value < 100000) {
		points.item(index).value--;
	}
}

// Changes size of Book and Mask
function sliderMove(index){
	if (scorecards.item(index).id === "score-cards"){
		adjustFontSize(index);
		return;
	}

	var sliderVal = slider.item(index).value;
	sliderVal = parseInt(sliderVal, 10);

	if (true){
		// width
		books.item(index).style.width = sliderVal + "%";
		// position left
		var lVal = 25 + ((50 - sliderVal) / 2);
		books.item(index).style.left = lVal + "%";
	}
}
// Adjust font size for books
function adjustFontSize(index) {
	var sliderVal = slider.item(index).value;
	sliderVal = parseInt(sliderVal, 10);

	var fSize = 1.2 + (sliderVal / 100);
	descriptionP.item(index).style.fontSize = fSize + "em";
}
// Resets book font size to 1.2em;
function resetFSize(index){
	descriptionP.item(index).style.fontSize = "1.2em";
}

// Display title
function displayTitle(index){
	titles.item(index).style.display = "flex";
}
function hideTitle(index){
	titles.item(index).style.display = "none";
}

// Go to scorecard / books / about container
function startPlaying(index){
	container.item(index).classList.remove('hide');
	container.item(index).classList.add('show');
}
function readBooks(index){
	booklistContainer.item(index).classList.remove('booklist-hide');
	booklistContainer.item(index).classList.add('booklist-show');
}
function aboutUs(index){
	if (aboutButton.item(index).innerHTML === "Back") {
		closeAbout(index);
	} else {
		aboutContainer.item(index).classList.remove('about-hide');
		aboutContainer.item(index).classList.add('about-show');
		aboutButton.item(index).innerHTML = "Back";
	}
}

// Close scorecard / about / books
function closeScorecards(index){
	container.item(index).classList.remove('show');
	container.item(index).classList.add('hide');
}
function closeAbout(index){
	aboutContainer.item(index).classList.remove('about-show');
	aboutContainer.item(index).classList.add('about-hide');
	aboutButton.item(index).innerHTML = "About";
}
function closeBooks(index){
	booklistContainer.item(index).classList.remove('booklist-show');
	booklistContainer.item(index).classList.add('booklist-hide');
	selectBook(8);
}

// Select a book in Main Page
function selectBook(index){
	for(var i=0; i<bookList.length; i++){
		if(i === index){
			bookList.item(i).classList.add('show-book');
		} else {
			bookList.item(i).classList.remove('show-book');
		}
	}
}

// Show & Hide info-intro on intro page
function showIntroScorecard(){
	if (infoIntroBooks.item(0).id === "" && infoContainer.item(0).id === ""){
		infoIntroBooks.item(0).id = "display-none";
	}
	infoIntroScorecard.item(0).id = "";
	infoContainer.item(0).id = "";
}
function showIntroBooks(){
	if (infoIntroScorecard.item(0).id === "" && infoContainer.item(0).id === ""){
		infoIntroScorecard.item(0).id = "display-none";
	}
	infoIntroBooks.item(0).id = "";
	infoContainer.item(0).id = "";
}
function hideIntro(index){
	if(index === 0){ // scorecard
		infoIntroScorecard.item(0).id = "display-none";
		infoContainer.item(0).id = "display-none";
	} else { // books
		infoIntroBooks.item(0).id = "display-none";
		infoContainer.item(0).id = "display-none";
	}
}
