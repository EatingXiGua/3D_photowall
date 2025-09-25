

//const photoContainer = document.getElementById('photo-ball');

// for (let i = 0; i < 125; i++) {
//     const img = document.createElement('img');
//     img.classList.add('photo');
//     img.src = `./image/${i}.png`;
//     photoContainer.appendChild(img);
// }

//const imgs = document.querySelectorAll('.global img'); // 获取所有图片
//const scale = 800;
for(let i=0;i<125;i++)
    {
        //imgs[i].style.display = '';  // 显示图片
        imgs[i].style.visibility = 'visible';
    }
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
// 遍历所有图片，设置它们的位移
imgs.forEach((img) => {
    const randomFloatX = getRandomFloat(-scale, scale);
    const randomFloatY = getRandomFloat(-scale, scale);
    const randomFloatZ = getRandomFloat(-scale, scale);
    img.style.transform = `translate3d(${randomFloatX}px, ${randomFloatY}px, ${randomFloatZ}px)`;
});

