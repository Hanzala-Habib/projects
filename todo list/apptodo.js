const inputBox= document.getElementById("input");
const list=document.getElementById("list");



function addtask(){

    if(inputBox.value==''){

        alert("please enter somthing!");
    }
    else{

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.append(li);
        let span=document.createElement("span");
        span.innerHTML=("\u00d7")
        li.appendChild(span);


        }
        inputBox.value="";
       savedata();
}

inputBox.addEventListener("keypress",(e)=>{


    if(e.key=="Enter"){

        addtask();
        savedata();
    }
} )

list.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){

            e.target.classList.toggle("checked");
            savedata();

    }
    else if(e.target.tagName==="SPAN"){

        e.target.parentElement.remove();
        savedata();
    }
},false);



function savedata(){

    localStorage.setItem("data", list.innerHTML);
}


function showdata(){

    list.innerHTML=localStorage.getItem("data");
}

showdata();