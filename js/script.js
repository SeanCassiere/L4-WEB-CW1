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

////////////////////////////////////

// GLOBAL Font Size Increaser
function increaseFontSize() {
    docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 2) + 'px';
}

// GLOBAL Font Size Decreaser
function decreaseFontSize() {
	docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 2) + 'px';
}

//Hidden 'To-The-Top' Button
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

// Feedback Form Validator
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

// Event Listeners
document.getElementById("decreaseFont").addEventListener("click",function(){decreaseFontSize();}); //Font Size Decrease -
document.getElementById("increaseFont").addEventListener("click",function(){increaseFontSize();}); //Font Size Increase +
document.getElementById("feedbackSubmit").addEventListener("click", function(){feedbackValidator(this.form);}); //Feedback Form Validator