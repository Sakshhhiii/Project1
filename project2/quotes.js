const startButton = document.getElementById("start");
const stopButton= document.getElementById("stop");
const quotesDisplay= document.querySelector(".quotesdisplay");

let interval; 
startButton.addEventListener ('click',function(){
interval= setInterval(getQuote,5000)});
function getQuote(){
  fetch("http://api.quotable.io/random")
  .then(res=>res.json())
  .then(data=>{quotesDisplay.innerHTML= data.content;})
  
}

function stopGenerator() {
  clearInterval(interval);
  interval=null;
}
stopButton.addEventListener('click',stopGenerator )