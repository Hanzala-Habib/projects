let boxes= document.querySelectorAll(".box");
let rest_btn=document.querySelector("#reset");
let playbtn=document.querySelector(".play");
let msgcontainer=document.querySelector(".playagain");
let para= document.querySelector(".para");


let turn1=true;


const win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

 boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
   console.log("btn clicked!");
   if(turn1){
       btn.innerText="O";
       btn.style.color="black";
        turn1=false;

   }else{
    btn.innerText="X";
    turn1=true;
    btn.style.color="green";
   }
   btn.disabled= true;

   checkwinner();
    });
});

function checkwinner(){
 for(let pattern of win_pattern){
    let val1= boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;

    if(val1!="" && val2!="" && val3!=""){
        if(val1==val2 && val2==val3){
            showwinner(val1);
                }
    }
      }

};

function showwinner(winner){

    para.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}

function reset(){
    turn1=true;
    msgcontainer.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

playbtn.addEventListener("click",reset);
rest_btn.addEventListener("click",reset);