var submitted = true;


function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var marks = 0;


	if (question1 == "Carly Rae Jepsen") {
		marks+=2;
	}else{
		marks-=1;
	}	
	if (question2 == "Lil Wayne") {
		marks+=2;
    }else{
		marks-=1;
	}	
	if (question3 == "Titanuim") {
		marks+=2;
	}else{
		marks-=1;
	}
	if (question4 == "I gotta turn this car around"){
		marks+=2;
	}else{
		marks-=1;
	}
	if (question5 == "Kesha") {
		marks+=2;
	}else{
		marks-=1;
	}	
	if (question6 == "Express Yourself - Madonna") {
		marks+=2;
    }else{
		marks-=1;
	}	
	if (question7 == "ManaGeMenT") {
		marks+=2;
	}else{
		marks-=1;
	}
	if (question8 == "Eminem"){
		marks+=2;
	}else{
		marks-=1;
	}
	if (question9 == "Looking 4 Myself") {
		marks+=2;
	}else{
		marks-=1;
	}	
	if (question10 == "Norah Jones") {
		marks+=2;
    }else{
		marks-=1;
	}
	if(submitted==true){
		clearInterval(timeOut);

	}
	
	if(marks > 15){
		document.body.style.backgroundColor = "Green";
	}else{
		document.body.style.backgroundColor = "red";
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "Your Mark Is : " + marks ;
}

var timeOut = setInterval(myTimer,1000);
var sec =60;

function myTimer(){
	if(sec>0){
		--sec;	
	}else{
		alert("Your Time Is Over!!");
		clearInterval(timeOut);
		submitted=false;
		check();
	}
	document.getElementById("time").innerHTML = sec
}