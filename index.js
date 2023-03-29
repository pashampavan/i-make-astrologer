let sky=document.getElementById('sky');
let box=document.getElementById('box');
let fullMoon=document.getElementById('fullMoon');
let mountain=document.getElementById('mountain');
let lightning=document.getElementById('lightning');
window.addEventListener('scroll',function(){
    let value=window.scrollY;
    // lightning.style.marginTop=60+value*.8+'px';
    // lightning.style.marginLeft=1100+-value*.8+'px';
    fullMoon.style.top=200+value*.3+'px';
    box.style.marginTop=value*.6+'px';
    mountain.style.bottom=-88+value*.2+'px';
})