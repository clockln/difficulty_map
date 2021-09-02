const menubuttonclick = document.getElementById('menubutton_open')
menubuttonclick.onclick = menu_open;

const menu_screen = document.getElementById('menu')

const textArea = document.getElementById('display_area')

function menu_open(){
  console.log('click')
  //menu_screen.classList.toggle('menu_open');
  textArea.value = '仮更新：タップで透明度変更、URLにデータ保存'
}
