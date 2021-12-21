//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// sideBar open when you click on the iocn
const sideBar = document.querySelector(".sideBar");
const barBtn = document.querySelector(".barBtn");
const barBtn2 = document.querySelector(".bar-btn");

barBtn.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
});

barBtn2.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
});

//like
const like1 = document.querySelector(".like-icon1");
const like2 = document.querySelector(".like-icon2");

like1.addEventListener("click", ()=>{
  like1.style.display ="none";
  like2.style.display ="block";
});

like2.addEventListener("click", ()=>{
  like2.style.display ="none";
  like1.style.display ="block";
});

//Screen responsive
function myFunction(x) {
  if (x.matches) { // If media query matches
    sideBar.classList.remove("open");
  }else{
    sideBar.classList.add("open");
  }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)