window.onload = function(){
//----------------------------------------------------------------------

const imgs = document.querySelectorAll('img');
for(let i=0;i<imgs.length;i++){
  imgs[i].addEventListener('click',displayText)
}

const text_display = document.getElementById('output')

function displayText(){
  const txt = this.getAttribute('alt')
  console.log(txt)
  text_display.value = txt
  console.log(imgs.length)
}


//----------------------------------------------------------------------
}