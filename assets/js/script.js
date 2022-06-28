// Users scores will always start from ZERO.
userScore = 0;

document.getElementById("q1button").onclick = function() {
    /* When the user clicks submit on question One, The value of that is grabbed and stored in a new variable named 'q1Answer' 
    We also convert this value into lowercase using toLowerCase () Method.
    Then a if, else statement runs to determine what action should be taken based on user input.
    */
    var q1Answer = document.getElementById("q1text").value.toLowerCase();
    // New variable is ready to use with a condition, This new variable is simply just the value of user input from question One.
    if ( q1Answer != "bitcoin") {
        // What to do if user input is NOT = to ("Bitcoin")
        document.getElementById("questionOne").style.background = "DarkRed";
        document.querySelector("h2").innerHTML = "Wrong answer ! ("+q1Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q1Answer, "This was Incorect.");
    } else {
        // What to do if user input is = to ("Bitcoin")
        document.getElementById("questionOne").style.background = 'DarkGreen';
        // Using the (.innerHTML) method i can easily replace HTML text.
        document.querySelector("h2").innerHTML = "Correct. <br> Bitcoin is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. Its by far the largest coin by Market Cap.";
        console.log("Answer was correct ! ! !")
        // userScore++ increments the userScore by '1'
        userScore++
    }
}

// Question two submit button action.
document.getElementById("q2button").onclick = function() {
    /* 
    When the submit button is clicked for Question Two, This function will grab the value of user input/Answer 
    and store it in an new variable named ('q2Answer') this variable then can be used in If statements to determine what to do bassed 
    on users input.
    */
    var q2Answer = document.getElementById("q2text").value.toLowerCase();

    // What to do if user does NOT type in the correct answer.
    if ( q2Answer != "namecoin") {
        document.getElementById("questionTwo").style.background = "DarkRed";
        document.querySelectorAll("h2")[1].innerHTML = "Wrong answer ! ("+q2Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q2Answer, "This was Incorect");
    } else {
        // This will happen if the user types in the correct answer/input.
        document.getElementById("questionTwo").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[1].innerHTML = "Correct. <br> NameCoin was the first altcoin to be created. A pseudo-anonymous founder by the name of “Vince” created Namecoin in 2011. Since then, Vince has disappeared, but a core development team has kept the project alive.";
        console.log("Answer was correct ! ! !")
        // UserScore is implemented by '1'
        userScore++
    }
}

// Question Three submit button action.
document.getElementById("q3button").onclick = function() {
    /*
    This function acts the same way as the previous questions functions for when a user clicks on submit on Question Three
    */
    var q3Answer = document.getElementById("q3text").value.toLowerCase();
    if ( q3Answer != "usdt") {
        // What to do if user does NOT type in the correct answer.
        document.getElementById("questionThree").style.background = "DarkRed";
        document.querySelectorAll("h2")[2].innerHTML = "Wrong answer ! ("+q3Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q3Answer, "This was Incorect");
    } else {
        // This will happen if the user types in the correct answer/input.
        document.getElementById("questionThree").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[2].innerHTML = "Correct. <br> Tether (USDT) is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.";
        // Simple console log incase user has console open.
        console.log("Answer was correct ! ! !")
        // userScore is implemented by '1'.
        userScore++
    }
}
// Question Four action.
document.getElementById("q4button").onclick = function() {
    var q4Answer = document.getElementById("q4text").value.toLowerCase();
    // The value of user input / Answers have been grabbed, Stored and text set to lowercase.
    // Do this if input is not correct.
    if ( q4Answer != "eth") {
        document.getElementById("questionFour").style.background = "DarkRed";
        document.querySelectorAll("h2")[3].innerHTML = "Wrong answer ! ("+q4Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        // Console.log A warning to the user and a conformation of what their answer was.
        console.log("Users input was " + q4Answer, "This was Incorect");
    } else { // If input/Answer is correct do this...
        document.getElementById("questionFour").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[3].innerHTML = "Correct. <br> (ETH) is the biggest altcoin to date. The founding team of Ethereum are known individuals which includes Vitalik Buterin, Mihai Alisie, Anthony Di lorio, Charles Hoskinson, Amir Chetrit, Joseph Lubin, Gavin Wood, and Jeffrey Wilke.";
        console.log("Answer was correct ! ! !")
        // userScore is implemented by '1'.
        userScore++
    }
}

// Question Five action.
document.getElementById("q5button").onclick = function() {
    // This function acts the exact same way as the previous ones above.
    var q5Answer = document.getElementById("q5text").value.toLowerCase();
    // What to do if user does NOT type in the correct answer.
    if ( q5Answer != "satoshi nakamoto") {
        document.getElementById("questionFive").style.background = "DarkRed";
        document.querySelectorAll("h2")[4].innerHTML = "Wrong answer ! ("+q5Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q5Answer, "This was Incorect");
    } else {
        // This will happen if the user types in the correct answer/input.
        document.getElementById("questionFive").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[4].innerHTML = "Correct. <br> The creator is an unknown individual or group that goes by the name Satoshi Nakamoto with the idea of an electronic peer-to-peer cash system as it is written in the BitCoin whitepaper.";
        console.log("Answer was correct ! ! !")
        // userScore is implemented by '1'.
        userScore++
    }
}

// Question Six action.
document.getElementById("q6button").onclick = function() {
    // This function acts the exact same way as the previous ones above.
    var q6Answer = document.getElementById("q6text").value.toLowerCase();
    // What to do if user does NOT type in the correct answer.
    if ( q6Answer != "2009") {
        document.getElementById("questionSix").style.background = "DarkRed";
        document.querySelectorAll("h2")[5].innerHTML = "Wrong answer ! ("+q6Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q6Answer, "This was Incorect");
    } else {
        // This will happen if the user types in the correct answer/input.
        document.getElementById("questionSix").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[5].innerHTML = "Correct. <br> Satoshi Nakamoto, the creator of Bitcoin, mined the first Bitcoin block on 3rd January 2009 and started the P2P digital cash system.";
        console.log("Answer was correct ! ! !")
        // userScore is implemented by '1'.
        userScore++
    }
}

// What to do when user clicks ("Check Score")....
document.getElementById("checkScore").onclick = function() {
    /* When onclick is triggered, this function will run.
    The function simply clears space on the HTML document by setting Display: Values to 'none'
    This will hide the previous questions, container as well as hide the button ("Check Score").
    This function then will set a previously hidden DIV's display to block, The newly 'block'ed div will take over the page
    And give the feeling a new page was opened. */
    document.getElementById("container").style.display = "none";
    document.getElementById("checkScore").style.display = "none";
    document.getElementById("header-text").innerHTML = "Quiz Ended...";
    document.getElementById("scorePageContainer").style.display = "block";
    document.getElementById("finalScore").innerHTML = "You scored a total of: " + userScore + " Out of 6 Questions."
}