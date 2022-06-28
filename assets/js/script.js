userScore = 0;

// Method that runs a task when user has submited there answer
document.getElementById("q1button").onclick = function() {
    var q1Answer = document.getElementById("q1text").value.toLowerCase();
    if ( q1Answer != "bitcoin") {
        document.getElementById("questionOne").style.background = "Red";
        document.querySelector("h2").innerHTML = "Wrong answer ! ("+q1Answer+ ") Is not correct.";
        console.log("Users input was " + q1Answer, "This was Incorect");
    } else {
        document.getElementById("questionOne").style.background = 'Green';
        document.querySelector("h2").innerHTML = "Correct. <br> Bitcoin is the largest coin by marketcap.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question two
document.getElementById("q2button").onclick = function() {
    var q2Answer = document.getElementById("q2text").value.toLowerCase();
    if ( q2Answer != "namecoin") {
        document.getElementById("questionTwo").style.background = "Red";
        document.querySelectorAll("h2")[1].innerHTML = "Wrong answer ! ("+q2Answer+ ") Is not correct.";
        console.log("Users input was " + q2Answer, "This was Incorect");
    } else {
        document.getElementById("questionTwo").style.background = 'Green';
        document.querySelectorAll("h2")[1].innerHTML = "Correct. <br> NameCoin was the first altcoin to be created.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Three
document.getElementById("q3button").onclick = function() {
    var q3Answer = document.getElementById("q3text").value.toLowerCase();
    if ( q3Answer != "usdt") {
        document.getElementById("questionThree").style.background = "Red";
        document.querySelectorAll("h2")[2].innerHTML = "Wrong answer ! ("+q3Answer+ ") Is not correct.";
        console.log("Users input was " + q3Answer, "This was Incorect");
    } else {
        document.getElementById("questionThree").style.background = 'Green';
        document.querySelectorAll("h2")[2].innerHTML = "Correct. <br> Tether (USDT) is the biggest stable coin to date.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}
// Question Four
document.getElementById("q4button").onclick = function() {
    var q4Answer = document.getElementById("q4text").value.toLowerCase();
    if ( q4Answer != "eth") {
        document.getElementById("questionFour").style.background = "Red";
        document.querySelectorAll("h2")[3].innerHTML = "Wrong answer ! ("+q4Answer+ ") Is not correct.";
        console.log("Users input was " + q4Answer, "This was Incorect");
    } else {
        document.getElementById("questionFour").style.background = 'Green';
        document.querySelectorAll("h2")[3].innerHTML = "Correct. <br> (ETH) is the biggest altcoin to date";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Five
document.getElementById("q5button").onclick = function() {
    var q5Answer = document.getElementById("q5text").value.toLowerCase();
    if ( q5Answer != "satoshi nakamoto") {
        document.getElementById("questionFive").style.background = "Red";
        document.querySelectorAll("h2")[4].innerHTML = "Wrong answer ! ("+q5Answer+ ") Is not correct.";
        console.log("Users input was " + q5Answer, "This was Incorect");
    } else {
        document.getElementById("questionFive").style.background = 'Green';
        document.querySelectorAll("h2")[4].innerHTML = "Correct. <br> name was the founder of BitCoin.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Six
document.getElementById("q6button").onclick = function() {
    var q6Answer = document.getElementById("q6text").value.toLowerCase();
    if ( q6Answer != "2009") {
        document.getElementById("questionSix").style.background = "Red";
        document.querySelectorAll("h2")[5].innerHTML = "Wrong answer ! ("+q6Answer+ ") Is not correct.";
        console.log("Users input was " + q6Answer, "This was Incorect");
    } else {
        document.getElementById("questionSix").style.background = 'Green';
        document.querySelectorAll("h2")[5].innerHTML = "Correct. <br> This was the year it was made (PLACEHOLDER)";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Check score button pull from DOM and maniplate to hide container and add new content
document.getElementById("checkScore").onclick = function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("checkScore").style.display = "none";
    document.getElementById("header-text").innerHTML = "Quiz Ended...";
    document.getElementById("scorePageContainer").style.display = "block";
    document.getElementById("finalScore").innerHTML = "You scored a total of: " + userScore + " Out of 6 Questions."
}