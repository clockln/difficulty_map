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
    const add_data = "<img src=\"" + folderName + "/" + element[4] + '.jpg\" class=\"' + Difficulty + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
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
  //  booth
  //  HVN
    ["Broken 8cmix","","18.6","h","01009h"],
    ["Evans VolteX Pf arrange","","18.4","h","01015h"],
    ["Onigo","お","18.5","h","01061h"],
    ["The world of sound","","18.7","h","01156h"],
    ["V.I.P.","","18.7","h","01107h"],
    ["金縛りの逢を","か","18.1","h","01146h"],
    ["腐れ外道とチョコレゐト","く","18.0","h","01102h"],
    ["幻想のサテライト","け","18.1","h","01089h"],
    ["孤独の番人","こ","18.3","h","01165h"],
  //  GRV
    ["Absurd Gaff","あ","18.6","g","01115g"],
    ["PANIC HOLIC","は","18.1","g","01120g"],
    ["Xepher Light and Darkness Dragon REMIX","","18.1","g","01030g"],
    ["魔理沙は大変なものを盗んでいきました","ま","18.6","g","01128g"],
  //  INF 
    ["croiX","く","18.6","i","01122i"],
    ["FLOWER REDALiCE Remix","ふ","18.4","i","01038i"],
    ["Max Burning!!","ま","18.5","i","01124i"],
    ["冥 Rockin' SWING REMIX","め","18.5","i","01034i"],
  //  II
  //  VVD
    ["#Fairy_dancing_in_lake","","18.3","v","02091v"],
    ["Joyeuse","","18.9","v","02076v"],
    ["Sakura Reflection (P*Light Slayer Remix)","さ","18.3","v","02016v"],
    ["She is my wife すーぱーアイドル☆ミツル子Remixちゃん","","18.4","v","02017v"],
    ["Unicorn tail Dustboxxxx RMX","","18.1","v","02096v"],
    ["おお われら喜び讃うべし、主よ","お","18.2","v","02174v"],
    ["こちら、幸福安心委員会です。","こ","18.4","v","02047v"],
    ["ムーニャポヨポヨスッポコニャーゴ","む","18.5","v","02158v"],
    ["上海紅茶館～ Chinese Tea Orchid Remix","","18.1","v","02175v"],
  //  HVN
    ["C18H27NO3","","18.1","h","02062h"],
    ["Harpuia","","18.3","h","02214h"],
    ["Idola","","18.8","h","02257h"],
    ["Qubism","","18.4","h","02044h"],
    ["超越してしまった彼女と其を生み落した理由","","18.7","h","02170h"],
    ["魔境堕天録サリエル","","18.7","h","02035h"],
  // GRV
    ["CODE -CRiMSON-","","18.6","g","02294g"],
    ["Crack Traxxxx","","18.4","g","02122g"],
    ["Hellfire","","18.7","g","02171g"],
    ["Last Concerto","","18.8","g","02172g"],
    ["Wish upon Twin Stars","","18.9","g","02293g"],
    ["最終鬼畜妹フランドール・S","","18.3","g","02127g"],
  // EXH
    ["Bangin' Burst","","18.4","e","02169e"],
    ["Black Emperor","","18.6","e","02215e"],
    ["BLACK or WHITE?","","18.4","e","02173e"],
    ["For UltraPlayers","","18.6","e","02168e"],
    ["Growth Memories","","18.2","e","02295e"],
    ["INSECTICIDE","","18.3","e","02277e"],
    ["VALLIS-NERIA","","18.3","e","02045e"],
    ["VILE CAT","","18.4","e","02308e"],
    ["werewolf howls.","","18.4","e","02302e"],
  // III gravity wars
  // HVN
    ["Garakuta Doll Play","","18.3","h","03178h"],
  // GRV
    ["Angelic Jelly","","18.3","g","03364g"],
    ["Celestial stinger","","18.6","g","03353g"],
    ["Completeness Under Incompleteness","","18.5","g","03352g"],
    ["HAELE III ~Angel Worlds~","","18.9","g","03189g"],
    ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX-","","18.4","g","03074g"],
    ["NEO TREASON","","18.4","g","03358g"],
    ["Ok!! Hug Me","","18.3","g","03341g"],
    ["Opium and Purple haze","","18.1","g","03134g"],
    ["Renegade Fruits","","18.3","g","03277g"],
    ["Triple Counter","","18.5","g","03367g"],
    ["XROSS THE XOUL","","18.4","g","03273g"],
  // EXH
    ["↓↓↓","と","18.3","e","03381e"],
    ["ΑΩ","","18.3","e","03148e"],
    ["Angels And Demons","","18.4","e","03212e"],
    ["Blastix Riotz","","18.7","e","03149e"],
    ["Demise Quartet","","18.7","e","03262e"],
    ["EMPIRE OF FLAME","","18.5","e","03247e"],
    ["#Endroll","","18.1","e","03401e"],
    ["End to end","","18.5","e","03246e"],
    ["Endless GRAVITY","","18.5","e","03308e"],
    ["Firestorm","","18.6","e","03167e"],
    ["FLOWER","","18.2","e","03176e"],
    ["FLügeL《Λrp:ΣggyØ》","","18.4","e","03368e"],
    ["Fox4-Raize-","","18.4","e","03267e"],
    ["GEOMETRIA","","18.5","e","03380e"],
    ["gigadelic(かめりあ's ''The TERA'' RMX)","","18.6","e","03117e"],
    ["HAVOX","","18.7","e","03093e"],
    ["IKAROS DYNAMITE!!!!","","18.3","e","03382e"],
    ["INF-B《L-aste-R》","","18.7","e","03128e"],
    ["Invitation from Mr.C","","18.3","e","03062e"],
    ["JEHANNEDARC","","18.1","e","03257e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side","","18.4","e","03263e"],
    ["Lachryma《Re:Queen'M》","","18.5","e","03242e"],
    ["LegenD.","","18.6","e","03064e"],
    ["MG277","","18.7","e","03266e"],
    ["NEO GRAVITY","","18.4","e","03245e"],
    ["Ops:Code-Rapture-","","18.4","e","03146e"],
    ["Pon-Pon-Pompoko Dai-Sen-Saw!","","18.4","e","03115e"],
    ["Prayer","","18.3","e","03383e"],
    ["Preserved Valkyria","","18.3","e","03150e"],
    ["Quaint Echo","","18.9","e","03404e"],
    ["REVOLVER","","18.6","e","03268e"],
    ["Sayonara Planet Wars","","18.5","e","03079e"],
    ["Seraphim","","18.1","e","03200e"],
    ["Solar Storm","","18.6","e","03405e"],
    ["tricky trick","","18.4","e","03073e"],
    ["Ultimate Ascension","","18.3","e","03323e"],
    ["UnivEarth","","18.6","e","03145e"],
    ["veRtrageS","","18.6","e","03152e"],
    ["Warriors Aboot","","18.2","e","03170e"],
    ["World's end","","18.9","e","03065e"],
    ["XHAOS JUDGE","","18.7","e","03229e"],
    ["XyHATTE","","18.3","e","03151e"],
    ["アルティメットトゥルース -Phantasm-","","18.2","e","03390e"],
    ["きたさいたま2000","","18.6","e","03179e"],
    ["ドーパミン","","18.6","e","03188e"],
    ["マサカリブレイド","","18.3","e","03180e"],
    ["ムラサキグルマ","","18.2","e","03224e"],
    ["極圏","","18.6","e","03394e"],
    ["月光乱舞","","18.3","e","03198e"],
    ["混乱少女♥そふらんちゃん!!","","18.5","e","03077e"],
    ["侍Annihilate!!","","18.2","e","03307e"],
    ["灼熱Beach Side Bunny","","18.6","e","03139e"],
    ["消失","","18.6","e","03156e"],
    ["絶対零度","","18.3","e","03384e"],
    ["到達してしまった僕らと夢と希望の最之果","","18.1","e","03078e"],
    ["東方妖々夢 ULTIMATE MEDLEY","","18.2","e","03386e"],
    ["伐折羅-vajra-","","18.6","e","03253e"],
    ["冥天・ヘメロカリス","","18.3","e","03225e"],
  // IV heavenly heaven
  // MXM
    ["Akzeriyyuth","","18.0","m","04349m"],
    ["Be a Hero!","","18.4","m","04204m"],
    ["BEAST BASS BOMB","","18.5","m","04187m"],
    ["Beyond the BLUE","","18.3","m","04350m"],
    ["Black night","","18.1","m","04330m"],
    ["BLAZING_LAZER","","18.1","m","04300m"],
    ["BlueMoon Princess","","18.4","m","04245m"],
    ["Boss Rush","","18.2","m","04062m"],
    ["Breakin' Asia","","18.0","m","04341m"],
    ["Catch Our Fire!","","18.3","m","04376m"],
    ["Cepheus","","18.4","m","04082m"],
    ["CHERNOBOG","","18.3","m","04261m"],
    ["Cloud 9","","18.3","m","04233m"],
    ["Concertino in Blue","","18.8","m","04142m"],
    ["crossing blue","","18.3","m","04244m"],
    ["Destiny","","18.5","m","04404m"],
    ["Divine's:Bugscript","","18.9","m","04278m"],
    ["Divine's or Deal","","18.3","m","04377m"],
    ["Doppelganger","","18.7","m","04161m"],
    ["Dreadnought","","18.6","m","04016m"],
    ["DropZ-Line-","","18.2","m","04202m"],
    ["ECHIDNA","","18.5","m","04291m"],
    ["Evans","","18.2","m","04270m"],
    ["FIRE IN MY HEART","","18.2","m","04107m"],
    ["FLOOR INFECTION Medley from SOUND VOLTEX×jubeat","","18.2","m","04078m"],
    ["GAIA","","18.3","m","04366m"],
    ["Gamerz FestivaL","","18.6","m","04067m"],
    ["Gate of Atlantis","","18.5","m","04297m"],
    ["GERBERA","","18.8","m","04186m"],
    ["Ghost Trigger","","18.5","m","04158m"],
    ["Glitter Flatter Scatter","","18.4","m","04151m"],
    ["Goddess Bless you","","18.2","m","04196m"],
    ["Gorgetech","","18.4","m","04110m"],
    ["Grand-Guignol","","18.3","m","04146m"],
    ["HP:1","","18.4","m","04179m"],
    ["Hug!! Vs. Hug!!","","18.5","m","04191m"],
    ["ΗУМЛ","","18.6","m","04214m"],
    ["Juggler's Maddness","","18.4","m","04139m"],
    ["JUNKIE FLAVOR","","18.5","m","04127m"],
    ["Khionos TiARA","","18.4","m","04198m"],
    ["KIMIDORI Streak!!","","","m",""],
    ["LastΩmegA","","","m",""],
    ["Legendary Road","","","m",""],
    ["Levier'n NābYss","","","m",""],
    ["Lowermost revolt","","","m",""],
    ["Lunatic Sprinter","","","m",""],
    ["Make Magic","","","m",""],
    ["MeteorGlow Aftermath","","","m",""],
    ["Midnight City Warfare","","","m",""],
    ["Mirrorwall","","","m",""],
    ["MODEL FT4","","","m",""],
    ["MONOLITH","","","m",""],
    ["New Leaf","","","m",""],
    ["Night Rockin' Bird","","","m",""],
    ["Noisy Minority","","","m",""],
    ["Nostalgic Blood of the Strife","","","m",""],
    ["OPEN MY GATE","","","m",""],
    ["ouroboros -twin stroke of the end-","","","m",""],
    ["ΩVERSOUL","","","m",""],
    ["POLICY BREAK Medley from SOUND VOLTEX×jubeat","","","m",""],
    ["Prey","","","m",""],
    ["Puberty Dysthymia","","","m",""],
    ["PUPA","","","m",""],
    ["Re:End of a Dream","","","m",""],
    ["Яe's NoVǢ","","","m",""],
    ["Rebellio","","","m",""],
    ["Redshift","","","m",""],
    ["RHYZING BEAT","","","m",""],
    ["Sacrifice and Faith","","","m",""],
    ["SACRIFICE feat.ayame","","","m",""],
    ["SAtAN","","","m",""],
    ["Scarlet Lance","","","m",""],
    ["Sky High","","","m",""],
    ["#SpeedyCats","","","m",""],
    ["Spirit of the Beast","","","m",""],
    ["STULTI","","","m",""],
    ["SUPER SUMMER SALE","","","m",""],
    ["Sweet Requiem","","","m",""],
    ["Taiko Drum Monster","","","m",""],
    ["The Formula","","","m",""],
    ["The Golden Era","","","m",""],
    ["THE HEAVEN","","","m",""],
    ["Theme of Ricerca","","","m",""],
    ["Touch My Body","","","m",""],
    ["TRICKL4SH 220","","","m",""],
    ["ULTiMATE INFLATiON","","","m",""],
    ["ULTRAVELOCITY","","","m",""],
    ["V","","","m",""],
    ["Venomous Firefly","","","m",""],
    ["Victim of Nights","","","m",""],
    ["We Go Down","","","m",""],
    ["Wings of Glory","","","m",""],
    ["Xevel","","","m",""],
    ["Yum Yum Sweetie","","","m",""],
    ["お米の美味しい炊き方、そしてお米を食べることによるその効果。","","","m",""],
    ["オニユリ","","","m",""],
    ["キュリオシティ","","","m",""],
    ["サイコパスラビット","","","m",""],
    ["スラッシュ//シスターズ","","","m",""],
    ["セイクリッド ルイン","","","m",""],
    ["そして黄金郷へ","","","m",""],
    ["ドリームエンド・サバイバー","","","m",""],
    ["のぼれ八坂坂！","","","m",""],
    ["びいすと！","","","m",""],
    ["ファイナルレター","","","m",""],
    ["ホワイトパレード","","","m",""],
    ["メイビ～初恋！？ビスケット☆大作戦","","","m",""],
    ["ワールズエンド・ダンスホール","","","m",""],
    ["怒槌","","","m",""],
    ["永遠に幸せになる方法、見つけました。","","","m",""],
    ["壊Rave*it!! 壊Rave*it!!","","","m",""],
    ["神獄烙桜","","","m",""],
    ["恋歌疾風！かるたクイーンいろは","","","m",""],
    ["極彩天奏","","","m",""],
    ["祝福の色彩は想い結ぶ君たち迄","","","m",""],
    ["準備運動","","","m",""],
    ["神話に芽吹く","","","m",""],
    ["水簾ノ調","","","m",""],
    ["誰が為に兎は舞う＝狂速狂騒曲＝","","","m",""],
    ["超☆超☆光☆速☆出☆前☆最☆速!!!","","","m",""],
    ["スピード★スター★かなで","","","m",""],
    ["†渚の小悪魔ラヴリィ～レイディオ†","","","m",""],
    ["光射す澪のユズリハ","","","m",""],
    ["雷鼓サンダービート","","","m",""],
  // GRV
    ["ALTONA","","18.3","g","04391g"],
    ["Nexta","","18.6","g","04289g"],
    ["PROVOES*PROPOSE <<êl fine>>","","18.7","g","04351g"],
    ["Reb∞t","","18.5","g","04302g"],
    ["REDO the NIGHT","","18.0","g","04389g"],
    ["She Turns Me On","","18.0","g","04388g"],
    ["まじかる生主＠りすなちゃん","","18.3","g","04326g"],
    ["業焔繚乱","","18.5","g","04253g"],
    ["真っ白な靴","","18.0","g","04390g"],
  // EXH
    ["ΣmbryØ","","18.4","e","04400e"],
    ["*Feels Seasickness...*","","18.7","e","04401e"],
    ["FIN4LE ～終止線の彼方へ～","","18.7","e","04141e"],
    ["Fin.ArcDeaR","","18.0","e","04056e"],
    ["I","","18.5","e","04238e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Empress Side","","18.8","e","04205e"],
    ["WHITEOUT","","18.4","e","04140e"],
    ["Xronièr","","18.8","e","04325e"],
  ]
