var menuBtn=document.getElementById("menuBtn");
var navEl=document.getElementById("nav");
function setMenu(open){
 navEl.classList.toggle("open",open);
 menuBtn.setAttribute("aria-expanded",open?"true":"false");
 menuBtn.setAttribute("aria-label",open?"Close menu":"Open menu");
}
menuBtn.addEventListener("click",function(){ setMenu(!navEl.classList.contains("open")); });
navEl.addEventListener("click",function(e){
 var t=e.target;
 while(t && t!==navEl && t.tagName!=="A"){ t=t.parentNode; }
 if(t && t.tagName==="A"){ setMenu(false); }
});
