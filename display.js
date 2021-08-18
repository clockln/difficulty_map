////Datalist + displayDatas

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  for(let i=9;i>=-1;i--){
    const newDiv = document.createElement('div')
    const addId = 'imgcontainer' + String(i)
    newDiv.setAttribute('id',addId)
    const add_Div_temp = document.getElementById('maincontainer')
    add_Div_temp.appendChild(newDiv);
  }

  let imglist = {'18.-1': '','18.0': '','18.1': '','18.2': '','18.3': '','18.4': '','18.5': '','18.6': '','18.7': '','18.8': '','18.9': '','18.10': ''};
  const folderName = 'jackets';
  data.forEach(element => {
    let Difficulty = 'EXH'
    if(element[3] == 'i'){
      Difficulty = 'INF'
    }else if(element[3] == 'g'){
      Difficulty = 'GRV'
    }else if(element[3] == 'h'){
      Difficulty = 'HVN'
    }else if(element[3] == 'v'){
      Difficulty = 'VVD'
    }else if(element[3] == 'm'){
      Difficulty = 'MXM'
    }
    const add_data = "<img src=\"" + folderName + "/" + element[4] + '\" class=\"' + Difficulty + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
    imglist[element[2]] += add_data;
  });

  for(let i=-1;i<=9;i++){
    const selectDiv = document.getElementById('imgcontainer' + String(i))
    const listKey = '18.' + String(i)
    console.log(selectDiv)
    console.log(listKey)
    selectDiv.innerHTML = imglist[listKey]
  }

});

const data = [
// name           diff   waku imglink
  ["Broken 8cmix","","18.6","h","01009h.jpg"],
  ["Evans VolteX Pf arrange","","18.4","h","01015h.jpg"],
  ["Onigo","お","18.5","h","01061h.jpg"],
  ["The world of sound","","18.7","h","01156h.jpg"],
  ["V.I.P.","","18.7","h","01107h.jpg"],
  ["金縛りの逢を","か","18.1","h","01146h.jpg"],
  ["腐れ外道とチョコレゐト","く","18.0","h","01102h.jpg"],
  ["幻想のサテライト","け","18.1","h","01089h.jpg"],
  ["孤独の番人","こ","18.3","h","01165h.jpg"],
  
  ["Absurd Gaff","あ","18.6","g","01115g.jpg"],
  ["PANIC HOLIC","は","18.1","g","01120g.jpg"],
  ["Xepher Light and Darkness Dragon REMIX","","18.1","g","01030g.jpg"],
  ["魔理沙は大変なものを盗んでいきました","ま","18.6","g","01128g.jpg"],

  ["croiX","く","18.6","i","01122i.jpg"],
  ["FLOWER REDALiCE Remix","ふ","18.4","i","01038i.jpg"],
  ["Max Burning!!","ま","18.5","i","01124i.jpg"],
  ["冥 Rockin' SWING REMIX","め","18.5","i","01034i.jpg"],


  ["#Fairy_dancing_in_lake","","18.3","v","02091v.jpg"],
  ["Joyeuse","","18.9","v","02076v.jpg"],
  ["Sakura Reflection (P*Light Slayer Remix)","さ","18.3","v","02016v.jpg"],
  ["She is my wife すーぱーアイドル☆ミツル子Remixちゃん","","18.4","v","02017v.jpg"],
  ["Unicorn tail Dustboxxxx RMX","","18.1","v","02096v.jpg"],
  ["おお われら喜び讃うべし、主よ","お","18.2","v","02174v.jpg"],
  ["こちら、幸福安心委員会です。","こ","18.4","v","02047v.jpg"],
  ["ムーニャポヨポヨスッポコニャーゴ","む","18.5","v","02158v.jpg"],
  ["上海紅茶館～ Chinese Tea Orchid Remix","","18.1","v","02175v.jpg"],
]