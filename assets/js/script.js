userScore = 0;

// Method that runs a task when user has submited there answer
document.getElementById("q1button").onclick = function() {
    var q1Answer = document.getElementById("q1text").value.toLowerCase();
    if ( q1Answer != "bitcoin") {
        document.getElementById("questionOne").style.background = "DarkRed";
        document.querySelector("h2").innerHTML = "Wrong answer ! ("+q1Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q1Answer, "This was Incorect.");
    } else {
        document.getElementById("questionOne").style.background = 'DarkGreen';
        document.querySelector("h2").innerHTML = "Correct. <br> Bitcoin is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. Its by far the largest coin by Market Cap.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question two
document.getElementById("q2button").onclick = function() {
    var q2Answer = document.getElementById("q2text").value.toLowerCase();
    if ( q2Answer != "namecoin") {
        document.getElementById("questionTwo").style.background = "DarkRed";
        document.querySelectorAll("h2")[1].innerHTML = "Wrong answer ! ("+q2Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q2Answer, "This was Incorect");
    } else {
        document.getElementById("questionTwo").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[1].innerHTML = "Correct. <br> NameCoin was the first altcoin to be created. A pseudo-anonymous founder by the name of “Vince” created Namecoin in 2011. Since then, Vince has disappeared, but a core development team has kept the project alive.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Three
document.getElementById("q3button").onclick = function() {
    var q3Answer = document.getElementById("q3text").value.toLowerCase();
    if ( q3Answer != "usdt") {
        document.getElementById("questionThree").style.background = "DarkRed";
        document.querySelectorAll("h2")[2].innerHTML = "Wrong answer ! ("+q3Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q3Answer, "This was Incorect");
    } else {
        document.getElementById("questionThree").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[2].innerHTML = "Correct. <br> Tether (USDT) is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}
// Question Four
document.getElementById("q4button").onclick = function() {
    var q4Answer = document.getElementById("q4text").value.toLowerCase();
    if ( q4Answer != "eth") {
        document.getElementById("questionFour").style.background = "DarkRed";
        document.querySelectorAll("h2")[3].innerHTML = "Wrong answer ! ("+q4Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q4Answer, "This was Incorect");
    } else {
        document.getElementById("questionFour").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[3].innerHTML = "Correct. <br> (ETH) is the biggest altcoin to date. The founding team of Ethereum are known individuals which includes Vitalik Buterin, Mihai Alisie, Anthony Di lorio, Charles Hoskinson, Amir Chetrit, Joseph Lubin, Gavin Wood, and Jeffrey Wilke.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Five
document.getElementById("q5button").onclick = function() {
    var q5Answer = document.getElementById("q5text").value.toLowerCase();
    if ( q5Answer != "satoshi nakamoto") {
        document.getElementById("questionFive").style.background = "DarkRed";
        document.querySelectorAll("h2")[4].innerHTML = "Wrong answer ! ("+q5Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q5Answer, "This was Incorect");
    } else {
        document.getElementById("questionFive").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[4].innerHTML = "Correct. <br> The creator is an unknown individual or group that goes by the name Satoshi Nakamoto with the idea of an electronic peer-to-peer cash system as it is written in the BitCoin whitepaper.";
        console.log("Answer was correct ! ! !")
        userScore++
    }
}

// Question Six
document.getElementById("q6button").onclick = function() {
    var q6Answer = document.getElementById("q6text").value.toLowerCase();
    if ( q6Answer != "2009") {
        document.getElementById("questionSix").style.background = "DarkRed";
        document.querySelectorAll("h2")[5].innerHTML = "Wrong answer ! ("+q6Answer+ ") Is not correct. Please try again or skip on to the next Question.";
        console.log("Users input was " + q6Answer, "This was Incorect");
    } else {
        document.getElementById("questionSix").style.background = 'DarkGreen';
        document.querySelectorAll("h2")[5].innerHTML = "Correct. <br> Satoshi Nakamoto, the creator of Bitcoin, mined the first Bitcoin block on 3rd January 2009 and started the P2P digital cash system.";
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