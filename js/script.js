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
var triedQuiz = false; // Created as a bool var to uncheck the selected radios, change question colours
var quizDuration = 40;
var timeOut;
var sec;

function musicquizLoadDisable(status){
    var cells = document.getElementsByClassName("questions"); 
    for (var i = 0; i < cells.length; i++) { 
        cells[i].disabled = status;
    }
}

function musicquizValidator(MusicQuizForm){
    var question01 = MusicQuizForm.question01.value;
    var question02 = MusicQuizForm.question02.value;
    var question03 = MusicQuizForm.question03.value;
    var question04 = MusicQuizForm.question04.value;
    var question05 = MusicQuizForm.question05.value;
    var question06 = MusicQuizForm.question06.value;
    var question07 = MusicQuizForm.question07.value;
    var question08 = MusicQuizForm.question08.value;
    
    if ( question01.length == 0 || question02.length == 0 || question03.length == 0 || question04.length ==0 || question05.length ==0 || question06.length ==0 || question07.length ==0 || question08.length ==0 ){
        alert('All Questions must be answered.')
    } else {
        var timeRemaining = quizDuration-sec;
        var totalMarks = 0;
        clearInterval(timeOut);
        if (question01=="Carly Rae Jespsen") {
            totalMarks+=2;document.getElementById('question01-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question01-box').style.backgroundColor = '#FF3A3A';
        }
        if (question02=="Madonna") {
            totalMarks+=2;document.getElementById('question02-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question02-box').style.backgroundColor = '#FF3A3A';
        }
        if (question03=="Dizzy Gillespie") {
            totalMarks+=2;document.getElementById('question03-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question03-box').style.backgroundColor = '#FF3A3A';
        }
        if (question04=="Justin Timberlake") {
            totalMarks+=2;document.getElementById('question04-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question04-box').style.backgroundColor = '#FF3A3A';
        }
        if (question05=="Paul McCartney") {
            totalMarks+=2;document.getElementById('question05-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question05-box').style.backgroundColor = '#FF3A3A';
        }
        if (question06=="Hopeless Place") {
            totalMarks+=2;document.getElementById('question06-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question06-box').style.backgroundColor = '#FF3A3A';
        }
        if (question07=="Roar") {
            totalMarks+=2;document.getElementById('question07-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question07-box').style.backgroundColor = '#FF3A3A';
        }
        if (question08=="Thriller") {
            totalMarks+=2;document.getElementById('question08-box').style.backgroundColor = '#38FF2F';
        } else {
            totalMarks-=1;document.getElementById('question08-box').style.backgroundColor = '#FF3A3A';
        }
        triedQuiz = true;
        alert('You scored a '+totalMarks+' out of 16. It took you '+timeRemaining+'s to complete this quiz.');
        document.getElementById("startTimer").value = "Retry";
    }
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

function musicquizReset(quizForm){
    var cells = document.getElementsByClassName("questions"); 
    for (var i = 0; i < cells.length; i++) {
        cells[i].checked = false;
    }
    var cells = document.getElementsByClassName("colored-questions"); 
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}
// (Conditional) Event Listeners
var MusicQuizFormLoad = document.getElementById("music-quiz-form");
if (MusicQuizFormLoad) {
    MusicQuizFormLoad.addEventListener("load", musicquizLoadDisable(true))
}

var MusicQuizFormSubmit = document.getElementById("quizSubmit");
if (MusicQuizFormSubmit) {
    MusicQuizFormSubmit.addEventListener('click',function(){musicquizValidator(this.form)});
}

var MusicQuizFormStartButton = document.getElementById("startTimer");
if (MusicQuizFormStartButton) {
    MusicQuizFormStartButton.addEventListener('click',function(){
        if (triedQuiz == true) {
            musicquizReset(this.form);
        }
        sec = quizDuration;
        musicquizLoadDisable(true);
        timeOut = setInterval(musicquizTimer, 1000);
    });
}