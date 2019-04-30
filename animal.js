'use strict'
{

let hedR=document.getElementById('header-right');
let tabu=document.getElementById('tabu');
let login=document.getElementById('login');
let mail=document.getElementById('mail');
let to_news=document.getElementById('to_news');
let modal=document.getElementById('modal');
let mask=document.getElementById('mask');
let idconfirm=document.getElementById('idconfirm');
let pasconfirm=document.getElementById('pasconfirm');
let circle=document.getElementById('circle');
let Mcircle=document.getElementById('Mcircle');
let limit=10;

function expHid(){

}

hedR.addEventListener('click',()=>{
 tabu.className='';
 hedR.classList.add('r');
});

circle.addEventListener('click',()=>{
 tabu.classList.add('appear');
 hedR.classList.add('re');
 hedR.classList.remove('r');
});

login.addEventListener('click',()=>{
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
  tabu.classList.add('appear');
});

mail.addEventListener('click',()=>{
  tabu.classList.add('appear');
  hedR.classList.remove('r');
});
// 
// to_news.addEventListener('click',()=>{
//   tabu.classList.add('appear');
//   hedR.classList.remove('r');
// });

// mask.addEventListener('click',=>{
//   modal.classList.remove('hidden');
//   mask.classList.remove('hidden');
//   tabu.classList.remove('appear');
// });

Mcircle.addEventListener('click',()=>{
 modal.classList.add('hidden');
 mask.classList.add('hidden');
 hedR.classList.remove('r');
});

document.getElementById('input1').addEventListener('click',()=>{
  input1.classList.add('reClolor');
});

document.getElementById('input2').addEventListener('keyup',()=>{
  let input2len=input2.value.length;
  if (input2len<5) {
    pasconfirm.classList.add('chcolor');
  }else if (input2len>11) {
    pasconfirm.classList.add('chcolor');
    alert('文字数超過です。10文字以内で入力してください')
  }else if (input2len<4&&input2len>10) {
    pasconfirm.classList.remove('chcolor');
  }
});


document.getElementById('loginBtn').addEventListener('click',()=>{
  loginBtn.className='push';
});

document.getElementById('sub').addEventListener('click',()=>{
  sub.className='push';
});

document.getElementById('pasu').addEventListener('click',()=>{
  pasu.className='push';
});

let img_src=['http://free-photo.net/photo_img/081030111211.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/92/♂_Common_Kingfisher_(Alcedo_atthis)_Photograph_By_Shantanu_Kuveskar,_Mangaon,_Maharashtra,_India.jpg',
  'https://farm5.static.flickr.com/4106/5603731218_5941fe49ef_o.jpg',
  'http://www009.upp.so-net.ne.jp/ryoko/image/img.htl/img.htl2007/kaeru.jpg',
  'https://up.gc-img.net/post_img_web/2017/07/cea3a0d09a5ef9c014e73091f5847a66_24453.jpeg',
  'https://awesomewallpapers.files.wordpress.com/2017/07/animals-0000136.jpg',
  'http://www.wallpaper-box.com/other/images/other65.jpg',
  'https://pbs.twimg.com/profile_images/521554275713830913/TBY5IslL.jpeg',
  'https://farm9.staticflickr.com/8179/7999051619_7ef145391c_b.jpg',
  'http://livedoor.blogimg.jp/fabledfabled-animalkakaku/imgs/b/f/bf80257e.jpg'
];
let num=-1;
let imgnum=10;

slide_time();

function slide_time(){
  num=Math.floor(Math.random()*imgnum);
  document.getElementById('slideimg').src=img_src[num];
  setTimeout(slide_time,4000);
}



// --------------------------------------------------------------------
animg1.addEventListener('mouseover',()=>{
  let animg1=document.getElementById('animg1');
  let animalex1=document.getElementById('animalex1');
  animalex1.innerHTML='脊椎を持つことを最大の特徴とする動物界の一門。';
});
animg1.addEventListener('mouseout',()=>{
  animalex1.innerHTML='';
});
animg2.addEventListener('mouseover',()=>{
  let animg2=document.getElementById('animg2');
  let animalex2=document.getElementById('animalex2');
  animalex2.innerHTML='脊椎動物以外のすべての動物の総称。体の中軸としての脊椎をもたない動物群。';
});
animg2.addEventListener('mouseout',()=>{
  animalex2.innerHTML='';
});
animg3.addEventListener('mouseover',()=>{
  let animg3=document.getElementById('animg3');
  let animalex3=document.getElementById('animalex3');
  animalex3.innerHTML='脊索動物門脊椎動物亜門哺乳綱の動物の総称。体は毛，ときに鱗でおおわれ，汗腺，脂肪腺などが発達している。';
});
animg3.addEventListener('mouseout',()=>{
  animalex3.innerHTML='';
});
animg4.addEventListener('mouseover',()=>{
  let animg4=document.getElementById('animg4');
  let animalex4=document.getElementById('animalex4');
  animalex4.innerHTML='脊椎動物門の鳥綱に分類される動物の総称。体は流線形で，羽毛に覆われる。口器は嘴になり，前肢は翼に変形しており，飛翔力は多くが備えているが，ダチョウやペンギン類など失った鳥もいる。';
});
animg4.addEventListener('mouseout',()=>{
  animalex4.innerHTML='';
});
animg5.addEventListener('mouseover',()=>{
  let animg5=document.getElementById('animg5');
  let animalex5=document.getElementById('animalex5');
  animalex5.innerHTML='脊椎動物門爬虫綱に属する動物の総称。石炭紀に現れ，中生代に繁栄した動物群で，進化の系統では両生類と鳥類・哺乳類の中間に位置する。';
});
animg5.addEventListener('mouseout',()=>{
  animalex5.innerHTML='';
});
animg6.addEventListener('mouseover',()=>{
  let animg6=document.getElementById('animg6');
  let animalex6=document.getElementById('animalex6');
  animalex6.innerHTML='脊椎動物門両生綱に属する動物の総称。体表は鱗，毛などでおおわれず，乾燥を防ぐため一般に多くの粘液腺をもつ。';
});
animg6.addEventListener('mouseout',()=>{
  animalex6.innerHTML='';
});
animg7.addEventListener('mouseover',()=>{
  let animg7=document.getElementById('animg7');
  let animalex7=document.getElementById('animalex7');
  animalex7.innerHTML='水界にすむ脊椎動物で，狭義には鰓で呼吸し，鰭で移動し，体表が鱗で覆われているものをさす。';
});
animg7.addEventListener('mouseout',()=>{
  animalex7.innerHTML='';
});

}
