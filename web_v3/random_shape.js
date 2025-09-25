// 任意位置样式，需要全部图片

for(let i=0;i<125;i++)
{
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

