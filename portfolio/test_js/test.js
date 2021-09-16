let a = 1;
console.log(a);

let score = 100;
let result;

result = score > 90 ? '特待生' :
  score > 70 ? '合格':
  score > 50 ? '追試' : '落第'

  if (score > 90) {
    console.log('特待生');
  } else if (score > 70) {
    console.log('合格'); 
  } else if (score > 50) {
    console.log('追試');
  } else {
    console.log('不合格');
  }
    
  console.log(result);


let val = 'D';
let ans;

switch (val) {
  case 'A' :
    ans = ('Aです');
    break;
    case 'B':
      ans = ('Bです');
      break;
    default :
      ans = 'AでもBでもありません';
}

console.log(ans);