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
let name;
function show(e,img,title,author,link){
    let child=document.getElementById('sec1').children;
    let n=document.getElementById('sec1').childElementCount;
    for(let i=0;i<n;i++)
    {
        child[i].style.opacity='1';
        child[i].style.top=null;
        child[i].style.left=null;
    }
    let child2=document.getElementById('sec2').children;
    let n2=document.getElementById('sec2').childElementCount;
    for(let i=0;i<n2;i++)
    {
        child2[i].style.opacity='1';
        child2[i].style.top=null;
        child2[i].style.left=null;
    }
    document.getElementById('show').innerHTML='';
    if(e.className==='card card1')
    {
        e.style.top='-16vh';
        e.style.left='-50vw';
        e.style.opacity="0";
    }
    if(e.className==='card card2')
    {
        e.style.top='-30vh';
        e.style.left='-30vw';
        e.style.opacity="0";
    }
    setTimeout(()=>{
        let tag='https://'.concat(img);
        let tag2='https://'.concat(link);
        document.getElementById('show').innerHTML=`<img src='${tag}'/>
        <div class=" title">
                    <h2>${title}</h2>
        </div>
        <p >${author}</p>
    <a href="${tag2}" target="_blank">BUY NOW</a>
        `;
    },2000)
    
}
// function show(e){
//     e.style.top='-600px';
//     let tag='https://'.concat(img);
//     let tag2='https://'.concat(link);
//     alert(img.target.id);
//     document.getElementById('show').innerHTML=`<img src='${tag}'/>
//     <div class=" title">
//                 <h2>${title}</h2>
//     </div>
//     <p >${author}</p>
// <a href="${tag2}" target="_blank">BUY NOW</a>
//     `;
// }
{/* <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41bE9+xIfLL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
            <div class=" title">
                <h2>Remedies Orthodox Astrology</h2>
            </div>
            <p >by Satyanarayana Naik | 1 January 2020</p>
            <a href="https://www.amazon.in/Remedies-Orthodox-Astrology-Satyanarayana-Naik/dp/8194306426/ref=sr_1_1?crid=2EPATFOE0LDQT&keywords=satyanarayana+naik+books&qid=1680274941&sprefix=satyanarayana+naik+books%2Caps%2C225&sr=8-1" target="_blank">BUY NOW</a> */}