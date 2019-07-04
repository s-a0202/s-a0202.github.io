'use strict'
{
let idconfirm=document.getElementById('idconfirm');
let pasconfirm=document.getElementById('pasconfirm');
let limit=10;

document.getElementById('input1').addEventListener('click',()=>{
  input1.classList.add('reClolor');
});

document.getElementById('input2').addEventListener('keyup',()=>{
  let input2len=input2.value.length;
  if (input2len<6) {
    pasconfirm.classList.add('chcolor');
  }else if (input2len==0){
    pasconfirm.classList.remove('chcolor');
  }else if (input2len>7&&input2len<12) {
    pasconfirm.classList.remove('chcolor');
  }else if (input2len>12) {
    pasconfirm.classList.add('chcolor');
    alert('文字数超過です。12文字以内で入力してください')
  }
});
}
