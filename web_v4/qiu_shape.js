// 球形样式js文件
// 分为9层。沿x轴旋转度数为：90、63、42、21、0、-21、-42、-63、-90
// 每层图片数量：1、8、14、16、20、16、14、8、1

// 只需要96张照片，显示前96张，隐藏后续
for(let i=0;i<96;i++)
{
    imgs[i].style.visibility = 'visible';
}
// for(let i=96;i<125;i++)
// {
//     imgs[i].style.visibility = 'hidden';
// }

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

