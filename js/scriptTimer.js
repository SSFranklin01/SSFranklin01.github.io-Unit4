//source for much of the timer js:  https://github.com/missjody/Code-Quiz/blob/master/index.html


var yourInitialsEl = document.getElementById("yourInitials");
var endMsgEl = document.getElementById("endMsg");
var yourScoreEl = document.getElementById("yourScore");




var submitBtn = document.getElementById("submitIntials");
var secondsLeft = 121;

function countdownTimer () {
    var interval = setInterval(function(){
        secondsLeft--;
        document.getElementById("time").innerHTML = secondsLeft;
        console.log(secondsLeft);
        

        //if run out of time
        if (secondsLeft === 0){
            clearInterval(interval);
            //hide quiz screen
            document.getElementById("quizScreen").setAttribute("style", "display: none");
            //show out of time screen
            document.getElementById("outOfTimeScreen").setAttribute("style","display: block");

        //or we answer all the questions
        } else if (currentIndex === 4) {

            clearInterval(interval);
            //hide quiz screen
            document.getElementById("quizScreen").setAttribute("style", "display: none");

             //show out of score screen
             document.getElementById("scoreScreen").setAttribute("style","display: block");

            //get score value and multiply it by seconds left
            score = ((score) * (secondsLeft));

            if (isNaN(score)) {
                yourScoreEl.innerHTML = "Your score is: 0";
            } else {
                endMsgEl.innerHTML = "You finished!";
                yourScoreEl.innerHTML = "Your score is: " + secondsLeft;
            }
        }
    }, 1000)
}

//records score
submitBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    console.log("on submitBtn click print out score: " + score);

    var initials = yourInitialsEl.value;
    console.log("initials" + yourInitialsEl);

    var finalScore = {
        initials,
        score
    };
    console.log("Final Score:" + finalScore);

    highscores.push(finalScore);
    
    console.log(initials, score);
    
});

