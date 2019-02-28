/*
//Button Scroller Function
function scrollToTop() {
	var position = document.body.scrollTop || document.documentElement.scrollTop;
	if (position){
		window.scrollBy(0,-Math.max(10, Math.floor(position / 10)));
		scrollAnimation=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(scrollAnimation);
}
//document.getElementById("scrollNow").onclick=function(){scrollToTop(); return false}; // Eased Scroll
*/

function increaseFontSize() {
    docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 2) + 'px';
}

function decreaseFontSize() {
	docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 2) + 'px';
}
// (Global) Font Resize Event Listeners
document.getElementById("decreaseFont").addEventListener('click',function(){decreaseFontSize();});
document.getElementById("increaseFont").addEventListener('click',function(){increaseFontSize();});


// Page Scrolling Button: Student 2
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos<=25) {
        document.getElementById("scrollNow").style.visibility = "hidden";
        document.getElementById("scrollNow").style.opacity = "0" ;
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    } else {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    }
    prevScrollpos = currentScrollPos;
}


// Feedback Form: Student 2
function feedbackValidator(FeedBackForm){
    var feedbackName = FeedBackForm.feedbackname.value;
    var feedbackEmail = FeedBackForm.feedbackemail.value;
    var feedbackRating = FeedBackForm.feedbackrating.value;
    var feedbackComments = FeedBackForm.feedbackcomments.value;
    if (feedbackComments.length==0){
        feedbackComments = "blank";
    } else {
        feedbackComments = "'"+feedbackComments+"'";
    }
    if (feedbackName.length==0 || feedbackEmail.length==0) {
        alert('All compulsory fields must be filled.');
    } else {
        alert('Dear '+feedbackName+', Thank you very much for your feedback. You have rated our site as '+feedbackRating+' and the comment left was '+feedbackComments+'. In addition your email is '+feedbackEmail+'.');
    }
}
// (Conditional) Event Listener
var FeedBackFormElement = document.getElementById("feedbackSubmit");
if (FeedBackFormElement) { FeedBackFormElement.addEventListener('click',function(){feedbackValidator(this.form)}); }


// Music Quiz Form: Student 3
var triedQuiz = false; // Created as a bool var to uncheck the selected radios
var timeOut;
var sec;
function musicquizValidator(MusicQuizForm){
    var timeRemaining = 10-sec; //Change this
    clearInterval(timeOut);
    var totalMarks = 0;
    var question01 = MusicQuizForm.question01.value;
    var question02 = MusicQuizForm.question02.value;
    var question03 = MusicQuizForm.question03.value;
    if (question01=="Carly Rae Jespsen"){totalMarks+=2;} else {totalMarks-=1}
    if (question02=="Madonna"){totalMarks+=2} else {totalMarks-=1}
    if (question03=="Dizzy Gillespie"){totalMarks+=2} else {totalMarks-=1}
    alert('You scored '+totalMarks+'. It took you '+timeRemaining+'s to complete this quiz.');
    document.getElementById("startTimer").value = "Retry";
}

function musicquizTimer(){
    musicquizLoadDisable(false);
    if(sec>0){
		--sec;	
	} else {
		alert("Your Time Is Over!!");
		clearInterval(timeOut);
	}
	document.getElementById("quizTimer").innerHTML = sec+'s';
}

function musicquizLoadDisable(status){
    var cells = document.getElementsByClassName("questions"); 
    for (var i = 0; i < cells.length; i++) { 
        cells[i].disabled = status;
    }
}
// (Conditional) Event Listeners
var MusicQuizFormSubmit = document.getElementById("quizSubmit");
if (MusicQuizFormSubmit) {
    MusicQuizFormSubmit.addEventListener('click',function(){musicquizValidator(this.form)});
}

var MusicQuizFormStartButton = document.getElementById("startTimer");
if (MusicQuizFormStartButton) {
    MusicQuizFormStartButton.addEventListener('click',function(){
        sec = 10;
        musicquizLoadDisable(true);
        timeOut = setInterval(musicquizTimer, sec*100);
    });
}

var MusicQuizFormLoad = document.getElementById("music-quiz-form");
if (MusicQuizFormLoad) {
    MusicQuizFormLoad.addEventListener("load", musicquizLoadDisable(true))
}