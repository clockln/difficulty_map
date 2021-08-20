/*
window.onload = function(){
  //----------------------------------------------------------------------
  const imgs = document.querySelectorAll('img')
  const texts = document.getElementById('display_area')

  texts.addEventListener("input",function(){
    console.log(this.value)
    const search_text = this.value.toUpperCase()
    
    for(let i=0;i<imgs.length;i++){
      imgs[i].className = imgs[i].className.substring(0,3)
      const alt_text = imgs[i].getAttribute('alt')
      if(alt_text == null || search_text == "") continue
      if(alt_text.toUpperCase().indexOf(search_text) > -1){
        imgs[i].className = imgs[i].className + "Q"
      }
      console.log(imgs[i].className)
    }
    
  })
  
  
  //----------------------------------------------------------------------
  }
  */