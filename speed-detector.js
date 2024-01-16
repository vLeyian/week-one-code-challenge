const calculate =document.querySelector(".AreaOfInput")
const submitSpeed = document.querySelector(".submitWork")

submitSpeed.addEventListener("click",()=>{
  speedDetector(parseInt(calculate.value,10));
});

const speedDetector = (speed) => {
 if(!(speed<0)){
  if ((speed - 70) / 5 > 12) {
    alert("Licence Suspended");
  }
  if (speed < 70) {
    alert("OK");
  } else {
    alert("Points: " + (speed - 70) / 5);
  }
 }else{
  alert("Invalid speed.Input a value from 0")
 }
};