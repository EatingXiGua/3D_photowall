
function yiDong(x,y,z){
    const photoContainer = document.getElementById('photo-ball');
    const imgs = document.querySelectorAll('.global img'); // 获取所有图片

    // 遍历所有图片，设置它们的位移
    imgs.forEach((img, index) => {
        //img.style.transform = `translate3d(${index * 100}px, ${index * 100}px, 200px)`;c
        switch(index){
            case 0:
                img.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
                break;
            case 1:
                img.style.transform = `translate3d(${2*x}px, ${2*y}px, ${2*z}px)`;
                break;
            case 2:
                img.style.transform = `translate3d(${3*x}px, ${3*y}px, ${3*z}px)`;
                break;
        }
        
    });
}



document.getElementById('yidong').addEventListener('click', function() {
    yiDong(200,200,200);
});