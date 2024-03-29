let userscore=0;
let compscore=0;
let draw=0;
let choices=document.querySelectorAll(".choice");
let user_score=document.querySelector(".userscore");
let comp_score=document.querySelector(".compscore");
let drawscore=document.querySelector(".drawscore");

choices.forEach((choice)=>{
    choice.addEventListener('click',(e)=>{
        console.log("Choice was clicked");
        let user_choice=e.target.parentElement.id;
        console.log(user_choice);
        let comp_choice=generate_choice();
        console.log(comp_choice);

        play_game(user_choice, comp_choice);
        display();
    });
});

let mychoices=['rock','paper','scissor'];

function generate_choice(){
    let index=Math.floor((Math.random()*3));
    let choice=mychoices[index];    
    return choice;
}

const play_game=(user,comp)=>{
    if(comp===user){
        console.log("The game is Draw");
        draw+=1;
    }else{
        compwon=false;
        if(user==='rock'){
            compwon=(comp==='paper')?true:false;
        }
        else if(user==='paper'){
            compwon=(comp==='scissor')?true:false;
        }
        else{
            compwon=(comp==='rock')?true:false;
        }
        if(!compwon){
            console.log("Congratulations You won!!");
            userscore+=1;
        }
        else{
            console.log("Yayy I won!!");
            compscore+=1;
        }
    }
};

const display=()=>{
    user_score.innerText=userscore;
    comp_score.innerText=compscore;
    drawscore.innerText=draw;
};