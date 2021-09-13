const ptx = document.querySelector('#paste_text');
const edit_btn = document.querySelector('#btn');

edit_btn.addEventListener('click', function() {
  let innerPtx = ptx.value;
  let blob = new Blob([innerPtx],{type:"text/plain"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'text_edit_file';
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link)
});