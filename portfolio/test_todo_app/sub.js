const inpbtn = document.querySelector('#btn2');

inpbtn.onclick = function() {
    let name = prompt('登録する名前を入力してください')
    alert('初めまして' + name + 'さん');
};

const userName = document.querySelector('#name');