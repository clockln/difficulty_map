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

  let imglist = {'18.-1': '','18.0': '','18.1': '','18.2': '','18.3': '','18.4': '','18.5': '','18.6': '','18.7': '','18.8': '','18.9': ''};
  const folderName = 'jackets';
  data.forEach(element => {
    let Difficulty = 'EXH'
    if(element[3] === 'i'){
      Difficulty = 'INF'
    }else if(element[3] === 'g'){
      Difficulty = 'GRV'
    }else if(element[3] === 'h'){
      Difficulty = 'HVN'
    }else if(element[3] === 'v'){
      Difficulty = 'VVD'
    }else if(element[3] === 'm'){
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
    selectDiv.innerHTML = '<p>' + imglist[listKey] + '</p>'
  }

});

const data = [
// name           ini diff  waku imglink
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

  ["C18H27NO3","","18.1","h","02062h.jpg"],
  ["Harpuia","","18.3","h","02214h.jpg"],
  ["Idola","","18.8","h","02257h.jpg"],
  ["Qubism","","18.4","h","02044h.jpg"],
  ["超越してしまった彼女と其を生み落した理由","","18.7","h","02170h.jpg"],
  ["魔境堕天録サリエル","","18.7","h","02035h.jpg"],

  ["CODE -CRiMSON-","","18.6","g","02294g.jpg"],
  ["Crack Traxxxx","","18.4","g","02122g.jpg"],
  ["Hellfire","","18.7","g","02171g.jpg"],
  ["Last Concerto","","18.8","g","02172g.jpg"],
  ["Wish upon Twin Stars","","18.9","g","02293g.jpg"],
  ["最終鬼畜妹フランドール・S","","18.3","g","02127g.jpg"],

  ["Bangin' Burst","","18.4","e","02169e.jpg"],
  ["Black Emperor","","18.6","e","02215e.jpg"],
  ["BLACK or WHITE?","","18.4","e","02173e.jpg"],
  ["For UltraPlayers","","18.6","e","02168e.jpg"],
  ["Growth Memories","","18.2","e","02295e.jpg"],
  ["INSECTICIDE","","18.3","e","02277e.jpg"],
  ["VALLIS-NERIA","","18.3","e","02045e.jpg"],
  ["VILE CAT","","18.4","e","02308e.jpg"],
  ["werewolf howls.","","18.4","e","02302e.jpg"],


  ["Garakuta Doll Play","","18.3","h","03178h.jpg"],

  ["Angelic Jelly","","18.3","g","03364g.jpg"],
  ["Celestial stinger","","18.6","g","03353g.jpg"],
  ["Completeness Under Incompleteness","","18.5","g","03352g.jpg"],
  ["HAELE III ~Angel Worlds~","","18.9","g","03189g.jpg"],
  ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX-","","18.4","g","03074g.jpg"],
  ["NEO TREASON","","18.4","g","03358g.jpg"],
  ["Ok!! Hug Me","","18.3","g","03341g.jpg"],
  ["Opium and Purple haze","","18.1","g","03134g.jpg"],
  ["Renegade Fruits","","18.3","g","03277g.jpg"],
  ["Triple Counter","","18.5","g","03367g.jpg"],
  ["XROSS THE XOUL","","18.4","g","03273g.jpg"],

  ["↓↓↓","と","18.3","e","03381e.jpg"],
  ["ΑΩ","","18.3","e","03148e.jpg"],
  ["Angels And Demons","","18.4","e","03212e.jpg"],
  ["Blastix Riotz","","18.7","e","03149e.jpg"],
  ["Demise Quartet","","18.7","e","03262e.jpg"],
  ["EMPIRE OF FLAME","","18.5","e","03247e.jpg"],
  ["#Endroll","","18.1","e","03401e.jpg"],
  ["End to end","","18.5","e","03246e.jpg"],
  ["Endless GRAVITY","","18.5","e","03308e.jpg"],
  ["Firestorm","","18.6","e","03167e.jpg"],
  ["FLOWER","","18.2","e","03176e.jpg"],
  ["FLügeL《Λrp:ΣggyØ》","","18.4","e","03368e.jpg"],
  ["Fox4-Raize-","","18.4","e","03267e.jpg"],
  ["GEOMETRIA","","18.5","e","03380e.jpg"],
  ["gigadelic(かめりあ's ''The TERA'' RMX)","","18.6","e","03117e.jpg"],
  ["HAVOX","","18.7","e","03093e.jpg"],
  ["IKAROS DYNAMITE!!!!","","18.3","e","03382e.jpg"],
  ["INF-B《L-aste-R》","","18.7","e","03128e.jpg"],
  ["Invitation from Mr.C","","18.3","e","03062e.jpg"],
  ["JEHANNEDARC","","18.1","e","03257e.jpg"],
  ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side","","18.4","e","03263e.jpg"],
  ["Lachryma《Re:Queen'M》","","18.5","e","03242e.jpg"],
  ["LegenD.","","18.6","e","03064e.jpg"],
  ["MG277","","18.7","e","03266e.jpg"],
  ["NEO GRAVITY","","18.4","e","03245e.jpg"],
  ["Ops:Code-Rapture-","","18.4","e","03146e.jpg"],
  ["Pon-Pon-Pompoko Dai-Sen-Saw!","","18.4","e","03115e.jpg"],
  ["Prayer","","18.3","e","03383e.jpg"],
  ["Preserved Valkyria","","18.3","e","03150e.jpg"],
  ["Quaint Echo","","18.9","e","03404e.jpg"],
  ["REVOLVER","","18.6","e","03268e.jpg"],
  ["Sayonara Planet Wars","","18.5","e","03079e.jpg"],
  ["Seraphim","","18.1","e","03200e.jpg"],
  ["Solar Storm","","18.6","e","03405e.jpg"],
  ["tricky trick","","18.4","e","03073e.jpg"],
  ["Ultimate Ascension","","18.3","e","03323e.jpg"],
  ["UnivEarth","","18.6","e","03145e.jpg"],
  ["veRtrageS","","18.6","e","03152e.jpg"],
  ["Warriors Aboot","","18.2","e","03170e.jpg"],
  ["World's end","","18.9","e","03065e.jpg"],
  ["XHAOS JUDGE","","18.7","e","03229e.jpg"],
  ["XyHATTE","","18.3","e","03151e.jpg"],
  ["アルティメットトゥルース -Phantasm-","","18.2","e","03390e.jpg"],
  ["きたさいたま2000","","18.6","e","03179e.jpg"],
  ["ドーパミン","","18.6","e","03188e.jpg"],
  ["マサカリブレイド","","18.3","e","03180e.jpg"],
  ["ムラサキグルマ","","18.2","e","03224e.jpg"],
  ["極圏","","18.6","e","03394e.jpg"],
  ["月光乱舞","","18.3","e","03198e.jpg"],
  ["混乱少女♥そふらんちゃん!!","","18.5","e","03077e.jpg"],
  ["侍Annihilate!!","","18.2","e","03307e.jpg"],
  ["灼熱Beach Side Bunny","","18.6","e","03139e.jpg"],
  ["消失","","18.6","e","03156e.jpg"],
  ["絶対零度","","18.3","e","03384e.jpg"],
  ["到達してしまった僕らと夢と希望の最之果","","18.1","e","03078e.jpg"],
  ["東方妖々夢 ULTIMATE MEDLEY","","18.2","e","03386e.jpg"],
  ["伐折羅-vajra-","","18.6","e","03253e.jpg"],
  ["冥天・ヘメロカリス","","18.3","e","03225e.jpg"],
]
