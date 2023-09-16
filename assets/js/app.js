let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")
let home  = document.querySelector(".home")
let towel = document.querySelector(".towel")
let robe = document.querySelector(".robe")
let sets = document.querySelector(".sets")
let sign = document.querySelector(".sign")


menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden");
  span4.classList.toggle("span1");
  span5.classList.toggle("span2");
  span6.classList.toggle("span3");
})
home.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
towel.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
robe.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
sets.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
sign.addEventListener("click",function(){
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
