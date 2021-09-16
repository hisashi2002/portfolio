
const edit_btn = document.querySelector('#btn');

edit_btn.addEventListener('click', function() {
  let innerPtx1 = [

    first_text1.value,
    first_text2.value,
    first_text3.value 

  ]

  let blob1 = new Blob([innerPtx1],{type:"text/plain"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob1);
   link.download = 'text_edit_file';
  document.body.appendChild(link);
  link.click();
});

