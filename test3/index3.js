let div = document.querySelector('#root > div');
 /*Если я правильно понимаю, нужно отобразить ТОЛЬКО div-ы, находящиеся внутри root, без span и самого root.
 Если все таки нужно отображать цвет всех, то .querySelector('div'); */
div.onclick = function (e) {
    console.log(e.target.style.background)
};