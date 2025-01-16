let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor = "rgb(25, 1, 48)";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // computer choice
    const compChoice = genCompChoice();
        console.log("comp choice = ",compChoice);

        if(compChoice === userChoice){
            drawGame();
        }

        else{
            userWin = true;
            if(userChoice === "rock"){
                //paper,scissor
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                //scissor,paper
                userWin = compChoice === "scissor" ? false : true;
            }
            else{
                //rock,paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);  
        document.getElementById('click-sound').play();      
    })

})

