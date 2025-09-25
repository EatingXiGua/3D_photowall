const rows = 5; // 行数
const cols = 5; // 列数
const distance = 180; // 距离
const scale = 800;
const photoContainer = document.getElementById('photo-ball');

for (let i = 0; i < 125; i++) {
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = `./image/${i}.png`;
    photoContainer.appendChild(img);
}

const imgs = document.querySelectorAll('.global img');
// 动态加载 JS 文件的函数
function loadScript(src) {
    //alert(src);
    // 清空 photo-ball 容器中的所有图片
    // const photoContainer = document.getElementById('photo-ball');
    // photoContainer.innerHTML = '';  // 清空容器中的所有图片

    // 删除旧的 script 标签
    const oldScript = document.getElementById('dynamicScript');
    console.log(oldScript);
    if (oldScript) {
        oldScript.remove();
    }

    // 创建新的 script 标签
    const script = document.createElement('script');
    script.id = 'dynamicScript';  // 设置 ID，方便删除旧的 script 标签
    script.src = src;
    document.body.appendChild(script);  

}


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


