const doc = document;

const imgImgShare = doc.querySelector('.img-img-share');

const avatar = doc.querySelector('.avatar');
const share = doc.querySelector('.share');


function clickState (){
  let mediaQueriList = window.matchMedia('(min-width: 1350px)')
if(mediaQueriList.matches){
  share.classList.toggle('hidden')
}else {
  avatar.classList.toggle('hidden');
  share.classList.toggle('hidden')
}
}


imgImgShare.addEventListener('click', clickState)