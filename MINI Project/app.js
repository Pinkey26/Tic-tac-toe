let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#reset-btn");
let p = document.querySelector("#win-p");
let h = document.querySelector(".win-contain");
let st = document.querySelector("#start");


let turnO = true;
let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetgame = ()=>{
    turnO = true;
    eisableU();
    h.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO) {
            let O = box;
            O.style.color = "#cab26a";
            O.innerText = "O";
            turnO = false;
        }else {
            let X = box;
            X.style.color = "#eeeee4";
            X.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
}) ;

const disableU = ()=>{
    for(box of boxes) {
        box.disabled = true;
    }
};

const eisableU = ()=>{
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    p.innerText = `Congratulation ! Winner is ${winner}`;
    h.classList.remove("hide");
    disableU();
}

const showDraw = () => {
    p.innerText = "It's a draw!";
    h.classList.remove("hide");
    disableU();
};

const checkWinner = ()=> {
    let winnerFound = false;

    for(let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="" ) {
            if( pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);  
                winnerFound = true;
                break;
            }
        }
    }
    if (!winnerFound && Array.from(boxes).every(box => box.innerText !== "")) {
        showDraw();
    }
}

st.addEventListener("click",resetgame);
resBtn.addEventListener("click",resetgame);


    
     

