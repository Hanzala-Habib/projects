let speech= new SpeechSynthesisUtterance();
let voiceSelect=document.querySelector("select");
let voices=[];
const btn=document.querySelector("button");

window.speechSynthesis.onvoiceschanged=()=>{
       voices=window.speechSynthesis.getVoices();
       speech.voice=voices[0];
       
       voices.forEach(( voice,i)=>(
            voiceSelect.options[i]=new Option(voice.name,i)
       ));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})


btn.addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})