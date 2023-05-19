let questionNumber;
questionNumber = 0;

let score;
score = 0;

let boa;
boa = 0;

function answerButtonPressed() {
questionNumber++;
console.log(questionNumber)
if (questionNumber === 11) {
	document.getElementById("answers").style.visibility = "hidden";
	}
}

function beginQuiz() {
document.getElementById("start").style.visibility = "hidden";
document.getElementById("answers").style.visibility = "visible";
questionNumber++;
	}

function questionText1() {
	if (questionNumber === 1) {
		document.getElementById("quesText").innerHTML = "What is the name of the main hero from the Halo series?";
		document.getElementById("questionNumberText").innerHTML = "Question #1";
	}
		
}

function questionTextCheck() {
	if (questionNumber === 2) {
		document.getElementById("quesText").innerHTML = "who is the leader of the pillar of autum?";
		document.getElementById("questionNumberText").innerHTML = "Question #2";
	} else if (questionNumber === 3) {
		document.getElementById("quesText").innerHTML = "what weapon is the hero first given at the start of the game?";
		document.getElementById("questionNumberText").innerHTML = "Question #3";
	}
	else if (questionNumber === 4) {
		document.getElementById("quesText").innerHTML = "who are the main enemies in the game?";
		document.getElementById("questionNumberText").innerHTML = "Question #4";
	}
	else if (questionNumber === 5) {
		document.getElementById("quesText").innerHTML = "what shaped object does the game take place on?";
		document.getElementById("questionNumberText").innerHTML = "Question #5";
	}
	else if (questionNumber === 6) {
		document.getElementById("quesText").innerHTML = "what kind of weapons do the main enemies use?";
		document.getElementById("questionNumberText").innerHTML = "Question #6";
	}
	else if (questionNumber === 7) {
		document.getElementById("quesText").innerHTML = "what is the name of the four wheel car vehicle?";
		document.getElementById("questionNumberText").innerHTML = "Question #7";
	}
	else if (questionNumber === 8) {
		document.getElementById("quesText").innerHTML = "what is the big plot twist of the game?";
		document.getElementById("questionNumberText").innerHTML = "Question #8";
	}
	else if (questionNumber === 9) {
		document.getElementById("quesText").innerHTML = "what are the second enemy that appears in the game?";
		document.getElementById("questionNumberText").innerHTML = "Question #9";
	}
	else if (questionNumber === 10) {
		document.getElementById("quesText").innerHTML = "who escapes halo at the end of the game?";
		document.getElementById("questionNumberText").innerHTML = "Question #10";
	}
	else if (questionNumber === 11) {
		document.getElementById("quesText").innerHTML = "Your correct question total is : "+score;
		document.getElementById("questionNumberText").innerHTML = "Well Done!";
		document.getElementById("audioStuff").style.visibility = "visible";
	}
}
function buttonText() {
	if (questionNumber === 1) {
		document.getElementById("btn1").innerHTML = "Zelda";
		document.getElementById("btn2").innerHTML = "Master-Chief";
		document.getElementById("btn3").innerHTML = "Tom Nook";
	} else if (questionNumber === 2) {
		document.getElementById("btn1").innerHTML = "Captain Keyes";
		document.getElementById("btn2").innerHTML = "Greybeard";
		document.getElementById("btn3").innerHTML = "Tom Nook";
	}
	else if (questionNumber === 3) {
		document.getElementById("btn1").innerHTML = "A sword";
		document.getElementById("btn2").innerHTML = "A stick";
		document.getElementById("btn3").innerHTML = "A Gun";
	}
	else if (questionNumber === 4) {
		document.getElementById("btn1").innerHTML = "Eldritch Horrors";
		document.getElementById("btn2").innerHTML = "Aliens";
		document.getElementById("btn3").innerHTML = "Tom Nook clones";
	}
	else if (questionNumber === 5) {
		document.getElementById("btn1").innerHTML = "A ring";
		document.getElementById("btn2").innerHTML = "A box";
		document.getElementById("btn3").innerHTML = "A Tetrahedron";
	}
	else if (questionNumber === 6) {
		document.getElementById("btn1").innerHTML = "Guns";
		document.getElementById("btn2").innerHTML = "Laser Weapons";
		document.getElementById("btn3").innerHTML = "Swords";
	}
	else if (questionNumber === 7) {
		document.getElementById("btn1").innerHTML = "A Puma";
		document.getElementById("btn2").innerHTML = "A Parrot";
		document.getElementById("btn3").innerHTML = "A WartHog";
	}
	else if (questionNumber === 8) {
		document.getElementById("btn1").innerHTML = "The bad guys are good";
		document.getElementById("btn2").innerHTML = "Halo is a superweapon";
		document.getElementById("btn3").innerHTML = "Boa is an underrated band";
	}
	else if (questionNumber === 9) {
		document.getElementById("btn1").innerHTML = "Plant Zombies";
		document.getElementById("btn2").innerHTML = "Demons";
		document.getElementById("btn3").innerHTML = "Ghosts";
	}
	else if (questionNumber === 10) {
		document.getElementById("btn1").innerHTML = "All the humans";
		document.getElementById("btn2").innerHTML = "Dustin Echos";
		document.getElementById("btn3").innerHTML = "Master chief and cortana";
	}
}

function answer1()	{
	if (questionNumber === 1) {
		null
	}
	else if (questionNumber === 2) {
		score++
	}
	else if (questionNumber === 5) {
		score++
	}
	else if (questionNumber === 9) {
		score++
	}
}
function answer2()	{
	if (questionNumber === 1) {
		score++
	}
	else if (questionNumber === 4) {
		score++
	}
	else if (questionNumber === 6) {
		score++
	}
	else if (questionNumber === 8) {
		score++
	}
}

function answer3()	{
	if (questionNumber === 3) {
		score++
	}
	else if (questionNumber === 7) {
		score++
	}
	else if (questionNumber === 8) {
		boa++
	}
	else if (questionNumber === 10) {
		score++
	}
}
