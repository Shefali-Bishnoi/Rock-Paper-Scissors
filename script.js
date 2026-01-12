const human_icons=document.querySelectorAll(".human_player_icons img")
const computer_icons=document.querySelectorAll(".computer_player_icons img")
const human_score=document.querySelector("#human_score")
const computer_score=document.querySelector("#computer_score")
const button=document.querySelector("#btn")
const msg=document.querySelector("#msg")

let user_score=0;
let comp_score=0;

button.addEventListener("click", () => {
    // Reset scores
    user_score = 0;
    comp_score = 0;
    human_score.innerText = user_score;
    computer_score.innerText = comp_score;

    // Remove highlights from human icons
    human_icons.forEach(icon => icon.classList.remove("highlight"));

    // Remove highlights from computer icons
    computer_icons.forEach(icon => icon.classList.remove("highlight"));

    // Reset message
    msg.innerText = "Play your move";
});

function generateComputerChoice(){
    const options=["rock","paper","scissors"]
    let randInd=Math.floor(Math.random()*3);
    computer_icons[randInd].classList.add("highlight")
    return options[randInd];
}
function endOneRound(){
    // Remove highlights from human icons
    human_icons.forEach(icon => icon.classList.remove("highlight"));

    // Remove highlights from computer icons
    computer_icons.forEach(icon => icon.classList.remove("highlight"));
}

function playgame(userChoice)
{
    const compChoice=generateComputerChoice();

    if(userChoice===compChoice)
    {
        msg.innerText="Draw";
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper")
            {
                userWin=false;
            }
        }
        else if(userChoice==="scissors")
        {
            if(compChoice==="rock")
            {
                userWin=false;
            }
        }
        else{
            if(compChoice==="paper")
            {
                userWin=false;
            }
        }

        if(userWin==true)
        {
            msg.innerText=`You Won (${userChoice} won against ${compChoice})`
            user_score++;
            human_score.innerText=user_score;
        }
        else{
            msg.innerText=`You lost (${userChoice} lost against ${compChoice})`
            comp_score++;
            computer_score.innerText=comp_score;
        }

    }
}

human_icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        endOneRound()
        const iconId=icon.getAttribute("id");
        icon.classList.add("highlight")
        playgame(iconId);
    })
})

