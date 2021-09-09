const inpbtn = document.querySelector('#btn2');

inpbtn.onclick = function() {
    let name = prompt('あなたの名前を登録してください')
    alert('はじめまして' + name + 'さん');
};