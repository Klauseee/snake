$(document).ready(init);
const gridIndex = [];
let facing = 'right';
let currentPosition = 190;
let bodyPosition = [186, 187, 188, 189];
const movements = {
  'up':
}

function init() {
  const $grid = $('.grid');
  for (var i = 0; i < 400; i++) {
    gridIndex.push(i);
  }

  gridIndex.forEach(() => {
    $grid.append($('<div></div>'));
  });

  $grid.children().toArray().forEach((cell, i) => {
    $(cell).addClass(`${i}`);
    $(cell).hasClass(`${currentPosition}`) ? $(cell).addClass('head') : $(cell).removeClass('head');
    bodyPosition.includes(i) ? $(cell).addClass('body') : $(cell).removeClass('body');
    $(cell).css({
      height: '40px',
      width: '40px'
    });
  });

  $(window).on('keydown', (e) => {
    switch(e.keyCode){
      case 37:
        facing = 'left';
        break;
      case 38:
        facing = 'up';
        break;
      case 39:
        facing = 'right';
        break;
      case 40:
        facing = 'down';
        break;
    }
  });

  // function movement() {
  //
  // }

}
