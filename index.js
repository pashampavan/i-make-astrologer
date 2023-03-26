let sky=document.getElementById('sky');
let box=document.getElementById('box');
let fullMoon=document.getElementById('fullMoon');
let mountain=document.getElementById('mountain');
let lightning=document.getElementById('lightning');
window.addEventListener('scroll',function(){
    let value=window.scrollY;
    lightning.style.marginTop=10+value*.7+'px';
    lightning.style.marginLeft=1100+-value*.7+'px';
    fullMoon.style.top=200+value*.3+'px';
    box.style.marginTop=value*.6+'px';
})