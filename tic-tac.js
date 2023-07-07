// these all are the condition of winning
const wincondition=[
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],  
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
]

// make an array to store at current index  'x' is present or 'o' is present
let position=['', '', '', '', '', '', '', '', ''];

let winner=document.querySelector('.winner');

// if winner is declared then game should stop there and tie condition shouldn't be checked
let winnerdeclared=false;
// if match is draw then 
let match_draw=false;

// restart button
const restart_button=document.querySelector('.button');

// color
let currentcolor="red";

// we are starting the game with x 
// turn will denote that currently which turn will be preformed 

let currentplayer="X";

// function to change the turn 

const changeturn =function (){
    if(currentplayer=="X") {currentplayer= "O";currentcolor="#45b6fe";}
    else {currentplayer="X"; currentcolor="red";}
   
}

// function to check the win

function checkwin(){

    for(let i=0;i<8;i++){
         
        let a=wincondition[i][0], b=wincondition[i][1], c=wincondition[i][2];
        if(position[a]==currentplayer&&position[b]==currentplayer&&position[c]==currentplayer)
            return true;
        
    }
    return false;

}

// function to check the draw
function checkdraw(){
    for(let i=0;i<9;i++){
        if(position[i]=='') return false;
    }
    return true;
}


// Game Logic

let cells=document.querySelectorAll('.cell');
// console.log(cells);
// Array.from(cells).forEach(function (){
    
// })

winner.textContent=currentplayer+" It's Your Turn"
for(let i=0;i<9;i++){
    cells[i].addEventListener('click', function(){
    
        // before filling the cell check cell is empty or not otherwise value will be override
        if(cells[i].textContent==''){
        cells[i].textContent=currentplayer;
        position[i]=currentplayer;
        cells[i].style.color=currentcolor;

     // restart button is not working for now 😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒😒
  
        // restart_button.addEventListener('click' , function (){
        //     position=["","","","","","","","",""];
        //     currentplayer=x;
        //     winner.textContent=currentplayer+"It's Your Turn"
        
        //     for(let i=0;i<9;i++){
        //         cells[i].textContent="";
        //     }
            
        //   }
        //   );
        







        // before changing the player check the winning condition
            if(checkwin()){
                 winner.textContent=currentplayer+" is winner";
                 winnerdeclared=true;
            }

            // check for draw conditon as well 
            if(checkdraw()&&!winnerdeclared){
                winner.textContent="match is draw";
                match_draw=true;
            }
            
        changeturn();
        if(!winnerdeclared&&!match_draw){
        winner.textContent=currentplayer+" it's your turn";
        
        }

        }
    })
}

