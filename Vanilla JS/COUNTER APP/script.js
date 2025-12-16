let inc = document.querySelector(".increase");
let dec = document.querySelector(".decrease");
let counter = document.querySelector(".counter");
let reset = document.querySelector(".reset");

let count = 0;


inc.addEventListener("click", function () {
  count++;
  if(count >=0) {
       counter.style.color = "white";
  }
  counter.innerHTML = count;
});

dec.addEventListener("click", function () {
  count--;
   if (count < 0) {
    counter.style.color = "red";
  } 
  counter.innerHTML = count;
});

reset.addEventListener("click", function () {
  
counter.style.color = "white";
counter.innerHTML = count = 0;
});
