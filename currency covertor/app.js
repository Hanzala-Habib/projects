const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const dropdowns=document.querySelectorAll("select");
const btn=document.querySelector("button");
const fromcurr=document.querySelector(".from");
const tocurr=document.querySelector(".to");
const msg=document.querySelector("#msg");

for(let select of dropdowns){

    for(currcode in countryList){

        let curr_option=document.createElement("option");
        curr_option.innerText=currcode;
        curr_option.value=currcode;
        if(select.name=="from" && currcode=="USD"){
            curr_option.selected="selected";
        }
        if(select.name=="to"   && currcode=="PKR"){
            curr_option.selected="selected";
        }
        select.append(curr_option);
    }
    select.addEventListener("change",(evnt)=>{
        updatedFlag(evnt.target);
    })
}

const updatedFlag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}


btn.addEventListener("click", async(evnt)=>{
    evnt.preventDefault();
    let amount=document.querySelector("input");
    let amtval=amount.value;
    if(amtval=="" || amtval<1){
            amtval=1;
            amount.value="1";

    }

    // console.log(fromcurr.value,tocurr.value);
   let lowerfrom=fromcurr.value;
   let lowerto=tocurr.value;

    const URL = `${base_url}/${lowerfrom.toLowerCase()}/${lowerto.toLowerCase()}.json`;
      let response= await fetch(URL);
      let data=await response.json();
      let f=lowerto.toLowerCase();
      let rate=data[f];
      console.log(rate);
      let finalamount=amtval*rate;
      msg.innerText=`${amtval}${fromcurr.value}=${finalamount.toFixed(3)}${tocurr.value}`;
});