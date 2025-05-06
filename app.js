let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw.play again";
    msg.style.backgroundColor="green";
    msg.style.color="white";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win");
         msg.innerText=`You Win!, Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor="yellow";
         msg.style.color="red";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Lose!");
         msg.innerText=`You Lose, ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor="black";
         msg.style.color="white";
    }
};


const genCompChoice=()=>{
    const options=["Rock","Papper","Scissors"];
    const ranIndex=Math.floor(Math.random()*3);
    return options[ranIndex];
}

const playGame=(userChoice)=>{
     console.log("userChoice=",userChoice);
     const compChoice = genCompChoice();
     console.log("compChoice=",compChoice);
     if(userChoice===compChoice){
        drawGame();
     }else{
        let userWin=true;
     if(userChoice==="Rock"){
        userWin=compChoice==="Papper"? false: true;
     }else if(userChoice==="Papper"){
        userWin=compChoice==="Scissors"? false: true;
     }else{
        userWin=compChoice==="rock"? false: true;
     }
     showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});



