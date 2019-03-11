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

// Products
var runningTotal;
function productPriceChecker(productForm){
    document.getElementById('products-chosen').innerHTML = "<p class='text-bold'>Products Chosen:</p>";
    if (productForm.product1.checked==true){
        runningTotal += productForm.prodQuantity1.value * 8;
        document.getElementById('products-chosen').innerHTML += "<p>Bebe Rexha - Expectations x "+productForm.prodQuantity1.value+" = $"+productForm.prodQuantity1.value * 8+"</p>";
    }
    if (productForm.product2.checked==true){
        runningTotal += productForm.prodQuantity2.value * 7;
        document.getElementById('products-chosen').innerHTML += "<p>Twenty One Pilots - Trench x "+productForm.prodQuantity2.value+" = $"+productForm.prodQuantity2.value * 7+"</p>";
    }
    if (productForm.product3.checked==true){
        runningTotal += productForm.prodQuantity3.value * 9;
        document.getElementById('products-chosen').innerHTML += "<p>Drake - Scorpion x "+productForm.prodQuantity3.value+" = $"+productForm.prodQuantity3.value * 9+"</p>";
    }
    document.getElementById('cart-total-price').innerHTML = "$"+runningTotal;
}

function ProductPersonalCheck(PersonalForm){
    if (PersonalForm.prodCustName.value.length==0 || PersonalForm.prodCustAddress.value.length==0){
        return false
    } else {
        return true
    }
}
// (Conditional Event Listener)
var ProductPriceCheck = document.getElementById("refresh-cart");
if (ProductPriceCheck) {
    ProductPriceCheck.addEventListener("click", function(){
        runningTotal = 0;
        productPriceChecker(this.form);
    })
}

var ProductCheckout = document.getElementById("checkout-cart");
if (ProductCheckout) {
    ProductCheckout.addEventListener("click", function(){
        runningTotal = 0;
        productPriceChecker(this.form);
        if (runningTotal==0) {
            alert('Products must be selected')
        } else if (ProductPersonalCheck(this.form)==false) {
            alert('All customer details MUST be entered.')
        } else if (ProductPersonalCheck(this.form)==true || runningTotal>0) {
            var productCartMessage = "Dear "+this.form.prodCustName.value+", you have ordered ";
            if (this.form.product1.checked==true){
                productCartMessage+=this.form.prodQuantity1.value+" copies of Bebe Rexha - Expectations at $"+this.form.prodQuantity1.value*8+", ";
            }
            if (this.form.product2.checked==true){
                productCartMessage+=this.form.prodQuantity2.value+" copies of Twenty One Pilots - Trench at $"+this.form.prodQuantity2.value*7+", ";
            }
            if (this.form.product3.checked==true){
                productCartMessage+=this.form.prodQuantity3.value+" copies of Drake - Scorpion at $"+this.form.prodQuantity3.value*9+", ";
            }
            productCartMessage = productCartMessage.slice(0, -2);
            productCartMessage +=". Your Total is $"+runningTotal+".";
            alert(productCartMessage)
        }
    })
}

// Gallery

function galleryImageChange(taggedItem){
    var bigImg = document.getElementById('expandedImage');
    var bigImgTxt = document.getElementById('expandedImageText');
    bigImg.src = taggedItem.src;
    bigImgTxt.innerHTML = taggedItem.alt;
    bigImg.parentElement.style.display = "block";
}

// (Conditional) Event Listener
var galleryImage1 = document.getElementById('galleryClick1');
if (galleryImage1) {
    galleryImage1.addEventListener('click', function(){galleryImageChange(this)})
}
var galleryImage2 = document.getElementById('galleryClick2');
if (galleryImage2) {
    galleryImage2.addEventListener('click', function(){galleryImageChange(this)})
}
var galleryImage3 = document.getElementById('galleryClick3');
if (galleryImage3) {
    galleryImage3.addEventListener('click', function(){galleryImageChange(this)})
}
var galleryImage4 = document.getElementById('galleryClick4');
if (galleryImage4) {
    galleryImage4.addEventListener('click', function(){galleryImageChange(this)})
}
var galleryImage5 = document.getElementById('galleryClick5');
if (galleryImage5) {
    galleryImage5.addEventListener('click', function(){galleryImageChange(this)})
}
var galleryImage6 = document.getElementById('galleryClick6');
if (galleryImage6) {
    galleryImage6.addEventListener('click', function(){galleryImageChange(this)})
}