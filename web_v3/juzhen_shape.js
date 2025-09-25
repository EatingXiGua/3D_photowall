//矩阵样式

//需要125张照片，5×5×5
for(let i=0;i<125;i++)
{
    imgs[i].style.visibility = 'visible';
}

//设置125张照片的位置
//中心(0,0,0)，中心左边(-distance,0,0)，中心右边(distance,0,0)
//中心前边(0,0,distance)，中心后边(0,0,-distance)
//中心上边(0，-distance,0)，中心下边(0，distance,0)
//以此类推
imgs.forEach((img, index) => {
    if (index < 25) { // 处理0-24图片，第一层，z轴-400
        const row = Math.floor(index / rows-2); // 计算行数
        const col = index % cols-2; // 计算列数


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, -400px)`;
    }
    else if (index >= 25 && index < 50) { // 处理25-49图片，第二层，z轴-200
        const row = Math.floor((index-25) / rows-2);
        const col = (index-25) % cols-2; 


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, -200px)`;
    }
    else if (index >= 50 && index < 75) { // 处理50-74图片，第三层，z轴0
        const row = Math.floor((index-50) / rows-2);
        const col = (index-50) % cols-2; 


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 0px)`;
    }
    else if (index >= 75 && index < 100) { // 处理75-100图片，第四层，z轴200
        const row = Math.floor((index-75) / rows-2);
        const col = (index-75) % cols-2; 

   
        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 200px)`;
    }
    else if (index >= 100 && index < 125) { // 处理100-125图片，第五层，z轴400
        const row = Math.floor((index-100) / rows-2); 
        const col = (index-100) % cols-2; 

        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 400px)`;
    }
});

