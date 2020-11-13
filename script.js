'use strict';

const newgameBtn=document.querySelector('.newgame');
const diceimage=document.querySelector('.image');
const rolldiceBtn=document.querySelector('.rolldice');
const holdBtn=document.querySelector('.hold');


const player=document.querySelectorAll('.player');
const score=document.querySelectorAll('.score');
const curr_score=document.querySelectorAll('.curr_score');

let current=0;

player[current].classList.add('curr_player');
let dice=0;
let won=-1;

const hold_activity=function()
{
    if (won!=-1)
        return;

    player[current].classList.remove('curr_player');
    if (dice!=1)
        score[current].textContent=Number(score[current].textContent)+Number(curr_score[current].textContent);

    if (score[current].textContent>=40)
    {
        player[current].classList.add('won');
        player[1].classList.remove('curr_player');
        player[0].classList.remove('curr_player');
        diceimage.classList.add('hidden');
        won=current;
        return;
    }
    else
        curr_score[current].textContent=0;

    current=1-current;
    player[current].classList.add('curr_player');  
}

const rolldice_activity=function()
{
    if (won!=-1)
        return;

    dice=Math.floor(Math.random()*6)+1;
    diceimage.src=`dice-${dice}.png`;
    diceimage.classList.remove('hidden');

    if (dice==1)
        hold_activity();
    else
        curr_score[current].textContent=Number(curr_score[current].textContent)+dice;
}

const newgame_activity=function()
{
    current=0;
    player[0].classList.add('curr_player');
    player[1].classList.remove('curr_player');
    score[0].textContent=0;
    score[1].textContent=0;
    curr_score[0].textContent=0;
    curr_score[1].textContent=0;
    dice=0;
    diceimage.classList.add('hidden');
    if (won!=-1)
        player[won].classList.remove('won');
    won=-1;
}

rolldiceBtn.addEventListener('click',rolldice_activity);
holdBtn.addEventListener('click',hold_activity);
newgameBtn.addEventListener('click',newgame_activity);