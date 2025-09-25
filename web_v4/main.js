//main.js文件

//定义全局变量行数、列数、照片间距离，juzhen_shape.js使用
const rows = 5; // 行数
const cols = 5; // 列数
const distance = 180; // 距离

//定义全局变量范围，random_shape.js使用
const scale = 800;

//定义全局变量photoContainer，获取photo-ball元素，即3D照片容器
const photoContainer = document.getElementById('photo-ball');

//创建img标签，添加125张照片为photo-ball的子元素
for (let i = 0; i < 96; i++) {
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = `./xdf/${i}.jpg`;
    photoContainer.appendChild(img);
}

//获取所有照片
const imgs = document.querySelectorAll('.global img');

// 切换js文件，已达到不同样式
function loadScript(src) {
    //删除旧的script标签
    const oldScript = document.getElementById('dynamicScript');
    console.log(oldScript);
    if (oldScript) {
        oldScript.remove();
    }

    //创建新的script标签
    const script = document.createElement('script');
    script.id = 'dynamicScript';  //设置ID，方便删除旧的script标签
    script.src = src;
    document.body.appendChild(script);  
}

//按钮监听点击事件
document.getElementById('huanshape').addEventListener('click', function() {
    loadScript('huan_shape.js');
});

document.getElementById('juzhenshape').addEventListener('click', function() {
    loadScript('juzhen_shape.js');
});

document.getElementById('qiushape').addEventListener('click', function() {
    loadScript('qiu_shape.js');
});

document.getElementById('randomshape').addEventListener('click', function() {
    loadScript('random_shape.js');
});


