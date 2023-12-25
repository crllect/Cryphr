document.querySelector('.menu').addEventListener('click', function() {
  this.classList.toggle('menuOpen');
  var mainWindow = document.querySelector('.mainWindow').classList;
  // var iframeWindow = document.querySelector('.iframeWindow').classList;
  var waybar = document.querySelector('.waybar').classList;
  var fullMenu = document.querySelector('.fullMenu').classList;
  var body = document.body.classList;
  if (this.classList.contains('menuOpen')) {
    mainWindow.add('menuOpen-mainWindow');
    // iframeWindow.add('menuOpen-iframeWindow');
    waybar.add('menuOpen-waybar');
    fullMenu.add('menuOpen-fullMenu');
    body.add('menuOpen-body');

    var mainMenuActive = document.querySelector('menuOpen-mainWindow').classList;
    var waybarActive = document.querySelector('.menuOpen-waybar').classList;
    var fullMenuActive = document.querySelector('.menuOpen-fullMenu').classList;
    var menuActive = document.querySelector('.menu.menuOpen').classList;
  } else {
    mainWindow.remove('menuOpen-mainWindow');
    // iframeWindow.remove('menuOpen-iframeWindow');
    waybar.remove('menuOpen-waybar');
    fullMenu.remove('menuOpen-fullMenu');
    body.remove('menuOpen-body');
  }
});

/*
const botBar = document.querySelector('.bottomBar');
const botBarHeight = window.getComputedStyle(botBar).getPropertyValue('height');
document.documentElement.style.setProperty('--bottomBar-height', bottomBarHeight);
*/


var bottomBarSize = 2; // make it so it can be toggled
document.querySelector('.botBar').addEventListener('click', function() {
  this.classList.toggle('gnomeSelector');

  if (this.classList.contains('gnomeSelector')) {
    bottomBar.add('gnomeSelector-bottomBar');
  } else {
    bottomBar.remove('gnomeSelector-bottomBar');
  }
});



// make sure that every element is accounted for, and that it accounts for active elements, you will figure something out
