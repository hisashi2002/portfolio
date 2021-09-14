const ptx1 = document.querySelector('#first_text1');
const ptx2 = document.querySelector('#first_text2');
const ptx3 = document.querySelector('#first_text3');
const edit_btn = document.querySelector('#btn');

edit_btn.addEventListener('click', function() {
  let innerPtx1 = [

    first_text1.value,
    first_text2.value,
    first_text3.value 

  ]
  
  console.log(innerPtx1);

  let blob1 = new Blob([innerPtx1],{type:"text/plain"});
  let blob2 = new Blob([innerPtx2],{type:"text/plain"});
  let blob3 = new Blob([innerPtx3],{type:"text/plain"});

  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob1);
  link.href = URL.createObjectURL(blob2);
  link.href = URL.createObjectURL(blob3);
  link.download = 'text_edit_file';
  document.body.appendChild(link);
  link.click();
});

const aclBtn = document.querySelector('#allCl_btn');

aclBtn.addEventListener('click', function() {
  aclBtn.value.removeChild(textContent)
});

