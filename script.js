window.onload = function(){
//----------------------------------------------------------------------
const text_display = document.getElementById('display_area')

const imgs = document.querySelectorAll('img');
for(let i=0;i<imgs.length;i++){
  imgs[i].addEventListener('click',displayText)
}

function displayText(){
  const txt = this.getAttribute('alt')
  console.log(txt)
  text_display.value = txt
}

//----------------------------------------------------------------------
}
