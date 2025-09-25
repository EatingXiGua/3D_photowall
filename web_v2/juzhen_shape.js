// alert("调用juzhen_shape.js")
// console.log("调用juzhen_shape.js")

//const photoContainer = document.getElementById('photo-ball');

// for (let i = 0; i < 125; i++) {
//     const img = document.createElement('img');
//     img.classList.add('photo');
//     img.src = `./image/${i}.png`;
//     photoContainer.appendChild(img);
// }

for(let i=0;i<125;i++)
    {
        //imgs[i].style.display = '';  // 显示图片
        imgs[i].style.visibility = 'visible';
    }
//const imgs = document.querySelectorAll('.global img'); // 获取所有图片
// rows = 5; // 行数
// cols = 5; // 列数
// distance = 180; // 距离

// 遍历所有图片，设置它们的位移
imgs.forEach((img, index) => {
    if (index < 25) { // 处理0-24图片
        const row = Math.floor(index / rows-2); // 计算行数
        const col = index % cols-2; // 计算列数


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, -400px)`;
    }
    else if (index >= 25 && index < 50) { // 处理25-49图片
        const row = Math.floor((index-25) / rows-2);
        const col = (index-25) % cols-2; 


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, -200px)`;
    }
    else if (index >= 50 && index < 75) { // 处理50-74图片
        const row = Math.floor((index-50) / rows-2);
        const col = (index-50) % cols-2; 


        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 0px)`;
    }
    else if (index >= 75 && index < 100) { // 处理75-100图片
        const row = Math.floor((index-75) / rows-2);
        const col = (index-75) % cols-2; 

   
        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 200px)`;
    }
    else if (index >= 100 && index < 125) { // 处理100-125图片
        const row = Math.floor((index-100) / rows-2); 
        const col = (index-100) % cols-2; 

        img.style.transform = `translate3d(${col * distance}px, ${row * distance}px, 400px)`;
    }
});

