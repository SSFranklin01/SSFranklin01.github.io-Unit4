//source for much of the timer js: - https://github.com/missjody/Code-Quiz/blob/master/assets/javascript/script.js

var startButtonEl = document.getElementById("startButton");
var questionEl = document.getElementById("question");
var startScreenEl = document.getElementById("startScreen");
var quizScreenEl = document.getElementById("quizScreen");
var resultEl = document.getElementById("result");
var buttonEl = document.querySelectorAll(".button");
var outOfTimeEl = document.getElementById("outOfTimeScreen");
var scoreScreenEl = document.getElementById("scoreScreen");





var timeEl = document.getElementById("time");
var quizBoxEl = document.getElementById("quizBox");







var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var choice4El = document.getElementById("choice4"); 

var score = 0;
//var startTime = 90;
var currentIndex = 0;

//start quiz?
startButtonEl.addEventListener ("click", startQuiz);








function startQuiz(){
    console.log("started");
    
  
    //start timer function
    countdownTimer();

    //hide start screen
    hideStart();
    
    //questions function
    showQuestion();

    //next question function


    //End quiz
}


//hide start screen, show quiz screen
function hideStart(){
    startScreenEl.style.display = "none"; //hide start screen
    quizScreenEl.style.display = "block"; //show quiz screen
}



//Show question and user answers
function showQuestion(){
    var quests = questions[currentIndex];
    questionEl.innerHTML = quests.quest;
    choice1El.innerHTML = quests.choices[0];
    choice2El.innerHTML = quests.choices[1];
    choice3El.innerHTML = quests.choices[2];
    choice4El.innerHTML = quests.choices[3];  


//Register user choice
for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function userAnswer(event){
        event.preventDefault();

        if(event.currentTarget.innerText === questions[currentIndex].answer){
            //score++;
            //console.log(score);
            resultEl.innerHTML = "Right!";
        } else {
            resultEl.innerHTML = "Wrong!";
            secondsLeft = secondsLeft - 10;
        }

        currentIndex++;

        
        if (currentIndex < 4) {
            showQuestion();
        } else {

        }
        })
    };

}
    





