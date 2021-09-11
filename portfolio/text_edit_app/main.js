
const edit_btn = document.querySelector('#btn');
console.log(edit_btn)

edit_btn.addEventListener('click', function() {
    const ptx = document.querySelector('#paste_text');
    console.log(ptx);
    const innerPtx = ptx.textContent;
    console.log(innerPtx)
    let blob = new Blob([innerPtx],{type:"text/plain"});
    let link = document.createElement('a'); 
    link.href = URL.createObjectURL(blob);
    link.download = 'text_edit_file';
});