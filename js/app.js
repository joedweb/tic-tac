const cells = document.querySelectorAll
(".cell");

let currentPlayer = "❌";

let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
});

/*create handlkeClci func */
function handleClick(e){
    const cell = e.target;          //select target being clicked

if(cell.textContent || gameOver){
        return;
    }

    cell.textContent = currentPlayer;


if(checkWin()){
    gameOver = true;
    alert(currentPlayer + " WINS 🎉")
}else if(checkDraw()){
    gameOver = true;
    alert('It is a draw 😑')
}


    currentPlayer = currentPlayer === '❌' ? '⭕' : '❌';       //to switch after X went
}


function checkWin(){
    const combos = [ 
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,5,8], [2,4,6]
                    ];

    for(const combo of combos)   {  
                                    //same as the enhanced for loop in java
    // const a = combo[0]
    // const b = combo[1]
    // const c = combo[3]
            //same as:

    const[a,b,c] = combo;
    if(cells[a].textContent && cells[a].textContent
        === cells[b].textContent && cells[b].textContent
        === cells[c].textContent)
            {
            return true;    //we have a winner
            }
        }
        return false;
    }




    function checkDraw() {
        for(const cell of cells){
            if(!cell.textContent){
                return false;
            }
        }
        return true;
    }
