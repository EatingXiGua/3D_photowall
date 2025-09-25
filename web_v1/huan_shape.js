
(function() {

const photoContainer = document.getElementById('photo-ball');

for (let i = 0; i < 60; i++) {
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = `./image/${i}.png`;
    photoContainer.appendChild(img);
}

const imgs = document.querySelectorAll('.global img');
imgs.forEach((img, index) => {
     // 5层圆环，一层20个，360/20=18，每18度一张照片
    if (index < 20) {
        const rotation = 18 * index;
        img.style.transform = `rotateY(${rotation}deg) rotateX(0deg) translateZ(500px) translateY(150px)`;        
    }
    else if(index >= 20 && index < 40){
        const rotation = 18 * (index-20);
        img.style.transform = `rotateY(${rotation}deg) rotateX(0deg) translateZ(500px) translateY(-150px)`;
    }
    else if(index >= 40 && index < 60){
        const rotation = 18 * (index-40);
        img.style.transform = `rotateY(${rotation}deg) rotateX(0deg) translateZ(500px) translateY(0px)`;
    }


});

})();