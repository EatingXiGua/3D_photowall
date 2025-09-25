(function() {


const photoContainer = document.getElementById('photo-ball');

for (let i = 0; i < 96; i++) {
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = `./image/${i}.png`;
    photoContainer.appendChild(img);
}


const imgs = document.querySelectorAll('.global img');

imgs.forEach((img, index) => {
    if (index < 18) { // 18张中间，20度一张
        const rotation = 20 * index;
        img.style.transform = `rotateY(${rotation}deg) rotateX(0deg) translateZ(450px)`;        
    }
    else if(index >= 18 && index < 34){
        const rotation = (360/16) * (index-18);
        img.style.transform = `rotateY(${rotation+5}deg) rotateX(21deg) translateZ(450px)`;
    }
    else if(index >= 34 && index < 50){
        const rotation = (360/16) * (index-34);
        img.style.transform = `rotateY(${rotation+5}deg) rotateX(-21deg) translateZ(450px)`;
    }
    else if(index >= 50 && index < 64){
        const rotation = (360/14) * (index-50);
        img.style.transform = `rotateY(${rotation}deg) rotateX(42deg) translateZ(450px)`;
    }
    else if(index >= 64 && index < 78){
        const rotation = (360/14) * (index-64);
        img.style.transform = `rotateY(${rotation}deg) rotateX(-42deg) translateZ(450px)`;
    }
    else if(index >= 78 && index < 86){
        const rotation = (360/8) * (index-78);
        img.style.transform = `rotateY(${rotation+10}deg) rotateX(63deg) translateZ(450px)`;
    }
    else if(index >= 86 && index < 94){
        const rotation = (360/8) * (index-86);
        img.style.transform = `rotateY(${rotation+10}deg) rotateX(-63deg) translateZ(450px)`;
    }
    else if(index >= 94 && index < 95){
        const rotation = 0;
        img.style.transform = `rotateY(${rotation}deg) rotateX(90deg) translateZ(450px)`;
    }
    else if(index >= 95 && index < 96){
        const rotation = 0;
        img.style.transform = `rotateY(${rotation}deg) rotateX(-90deg) translateZ(450px)`;
    }
});

})();