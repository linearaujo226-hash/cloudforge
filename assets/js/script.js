window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.background="#09111f";

}else{

header.style.background="rgba(9,17,31,.85)";

}

});
