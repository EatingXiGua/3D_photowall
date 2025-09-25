// alert("调用huan_shape.js")
//(function() {

//const photoContainer = document.getElementById('photo-ball');

//for (let i = 0; i < 60; i++) {
    // const img = document.createElement('img');
    // img.classList.add('photo');
    // img.src = `./image/${i}.png`;
    //photoContainer.appendChild(img);
//}
for(let i=0;i<60;i++)
    {
        //const rmimg = document.getElementsByClassName("photo");
        //photoContainer.appendChild(imgs[i]);
        //imgs[i].style.display = '';  // 显示图片
        imgs[i].style.visibility = 'visible';
    }
for(let i=60;i<125;i++)
{
    //const rmimg = document.getElementsByClassName("photo");
    //photoContainer.removeChild(imgs[i]);
    //imgs[i].style.display = 'none';  // 隐藏图片
    imgs[i].style.visibility = 'hidden';
}

//const imgs = document.querySelectorAll('.global img');
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

//})();