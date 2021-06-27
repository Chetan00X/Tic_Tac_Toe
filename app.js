// HTML Element
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");


//game constant
const xSymbol='✖';
const oSymbol='Ο';

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;


//function
const handleWin=(letter)=>{
  gameIsLive = false;
  winner = letter;
  if(winner==='x'){
    statusDiv.innerHTML=   statusDiv.innerHTML = `${letterToSymbol(winner)} has won ! `;
  }
  else{
  
    statusDiv.innerHTML=`<span>
      ${letterToSymbol(winner)} has won!
      </span>`;
  }
}

const letterToSymbol=(letter)=>letter==='x'? xSymbol:oSymbol;
const checkGamestatus = () => {
topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];

  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];

  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];

  //check for the winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
  handleWin(topLeft);
  }
  else if(middleLeft && middleLeft===middleMiddle&& middleLeft===middleRight){
    handleWin(middleLeft);
  }
  else if(bottomLeft && bottomLeft===bottomMiddle && bottomLeft===bottomRight){
    handleWin(bottomLeft)
  }
  else if(topLeft&&topLeft===middleLeft&&topLeft===bottomLeft){
    handleWin(topLeft);
  }
  else if(topMiddle&&topMiddle==bottomMiddle&&topMiddle===middleMiddle){
    handleWin(topMiddle);
  }
  else if(topRight && topRight===bottomRight && topRight===middleRight){
    handleWin(topRight);
  }
  else if(topRight&&topRight===middleMiddle && topRight===bottomLeft){
    handleWin(topRight);
  }
  // this whole logic is for all the combination that can exist in tic tac toe & these are total 8 combination
  else if(topLeft && topMiddle&& topRight&&middleLeft&&middleMiddle&&middleRight&&bottomLeft&&bottomMiddle&&bottomRight){
    gameIsLive=false;
    statusDiv.innerHTML="It's a tie"
  }
  };


// event Handlers
const handleReset = (e) => {
  xIsNext=true;
  statusDiv.innerHTML=`${xSymbol} is next `;
  for(const cellDiv of cellDivs){
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
  }//this basicily iterate over all the class which have O & X then remove it 
};

const handleCellClick = (e) => {
  const location = e.target.classList[1];
  const classList = e.target.classList;
  if (classList[2] === "x" || classList[2] === "o") {
    return;
  }
  //this logic work to give x&y one by one
  if (xIsNext) {
    classList.add("x");
    checkGamestatus();
    xIsNext = !xIsNext; //this help us to give O this is quit similar to switching 
    
  } else {
    classList.add("o");
    checkGamestatus();

    xIsNext = true; // this logic help us to give X:)
  }
};

// event listeners
resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
// added a comment 
// added a comment