window.onload = function(){
    //----------------------------------------------------------------------
    const text_display = document.getElementById('display_area')
    
    const imgs = document.querySelectorAll('img');
    for(let i=0;i<imgs.length;i++){
      imgs[i].addEventListener('click',displayText)
    }
    
    // display.jsからデータ引っ張る
    let srclist = display();
    
    function display(){
      return ret_array()
    }
    
    function displayText(){
      const txt = this.getAttribute('alt')
      console.log(txt)
      // 曲名と表示テキストが同じ
      if(txt === text_display.value){ // 透明度変換部
        const getsrc = this.getAttribute('src').split('/')[1].split('.')[0];
        if(srclist[getsrc] == 0){
          srclist[getsrc] = 1
          this.classList.toggle('opa1')
        }else if(srclist[getsrc] == 1){
          srclist[getsrc] = 2
          this.classList.toggle('opa1')
          this.classList.toggle('opa2')
        }else{
          srclist[getsrc] = 0
          this.classList.toggle('opa2')
        }
        // データをパラメータで保存
        let paramater = '';
        Object.keys(srclist).forEach(key => {
          paramater += key + ':' + String(srclist[key]) + ',';
        });
        history.replaceState('','','?' + deflate(paramater));
      // 曲名と表示テキストが違う
      }else{
        // 曲名を表示
        text_display.value = txt
      }
    }
    
    // 圧縮関数 (要deflate.js)
    function deflate(val) {
      val = encodeURIComponent(val); // UTF16 → UTF8
      val = zip_deflate(val); // 圧縮
      val = btoa(val); // base64エンコード
      return val;
    }
    
    // 復号関数 (要inflate.js)
    function inflate(val) {
      val = atob(val); // base64デコード
      val = zip_inflate(val); // 復号
      val = decodeURIComponent(val); // UTF8 → UTF16
      return val;
    }

  const texts = document.getElementById('search_place')

  texts.addEventListener("input",function(){
    const search_text = this.value.toUpperCase()
    
    for(let i=0;i<imgs.length;i++){
      const alt_text = imgs[i].getAttribute('alt')
      if(alt_text == '' || alt_text == null) continue
      const tempAlt = alt_text.split('/')
      const musicName = tempAlt[1]
      if(musicName == '') continue
      if(search_text == ""){
        imgs[i].className = reReplaceTag(imgs[i].className)
      }else if(alt_text.toUpperCase().indexOf(search_text) > -1){
        imgs[i].className = reReplaceTag(imgs[i].className)
      }else{
        imgs[i].className = replaceTag(imgs[i].className)
      }
    }
    
  })

  function replaceTag(val){
    let ret = val.replace('EXH','EXQ')
    ret = val.replace('INF','INQ')
    ret = val.replace('GRV','GRQ')
    ret = val.replace('HVN','HVQ')
    ret = val.replace('VVD','VVQ')
    ret = val.replace('MXM','MXQ')
    return ret
  }

  function reReplaceTag(val){
    let ret = val.replace('EXQ','EXH')
    ret = val.replace('INQ','INF')
    ret = val.replace('GRQ','GRV')
    ret = val.replace('HVQ','HVN')
    ret = val.replace('VVQ','VVD')
    ret = val.replace('MXQ','MXM')
    return ret
  }
    
    //----------------------------------------------------------------------
    }
