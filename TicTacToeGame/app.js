let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#resetBtn');
let newGm= document.querySelector('#newGm');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// player O or player X
let turnO =true;  

 const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ]

function reset(){
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

function enableBoxes(){
    for(let i of boxes){
        i.disabled = false;
        i.innerText = " ";
    }
}
function disableBoxes(){
    for(let i of boxes){
        i.disabled = true;
    }
}
 function showWinner(winner){
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }

 function checkWinner(){
    for(let i of winPattern){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);

            }
        }
    }

 }

 boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){//player O 
            box.innerText = "O";
            box.classList.add("Oclr");
            turnO = false;

        }else{//player X
            box.innerText = "X";
            box.classList.add("Xclr")
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
 });

 newGm.addEventListener("click",reset);
 resetBtn.addEventListener("click",reset);