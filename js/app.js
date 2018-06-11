console.log('loaded');

$(document).ready(init);

function init() {
  const $grid = $('.grid');
  const gridIndex = [];

  for (var i = 0; i < 400; i++) {
    gridIndex.push(i);
  }

  gridIndex.forEach(() => {
    $grid.append($('<div></div>'));
  });

  $grid.children().toArray().forEach((cell) => {
    $(cell).css({
      height: '40px',
      width: '40px'
    });
  });

}
