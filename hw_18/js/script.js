window.onload = function () {

  let topOffset = 100;
  document.addEventListener('keydown', function (event) {
    var hero = document.querySelector('#hero');
    if (!hero.style.top) {
      hero.style.top = hero.offsetTop;
    }
    if (!hero.style.left) {
      hero.style.left = hero.offsetLeft;
    }

    // Up
    if (event.keyCode === 38) {
      hero.style.top = +getCurrentPosition(hero).y - topOffset/10 + 'px';
      hero.offsetTop = +getCurrentPosition(hero).y + topOffset/5;
    }
    //Down
    if (event.keyCode === 40) {
      hero.style.top = +getCurrentPosition(hero).y + topOffset/10 + 'px';
      hero.offsetTop = +getCurrentPosition(hero).y - topOffset/10;
    }

    // Left
    if (event.keyCode === 39) {
      hero.style.left = +getCurrentPosition(hero).x + topOffset/10 + 'px';
      hero.offsetLeft = +getCurrentPosition(hero).x - topOffset/10;
    }

    // Right
    if (event.keyCode === 37) {
      hero.style.left = +getCurrentPosition(hero).x - topOffset/10 + 'px';
      hero.offsetLeft = +getCurrentPosition(hero).x + topOffset/10;
    }

    // Space
    if (event.keyCode === 32) {
      let i = 0;
      let interval1 = setInterval(function () {
        hero.style.top = +getCurrentPosition(hero).y - 2 + 'px';
        if (i > topOffset/2) {
          clearInterval(interval1);
          j = 0;
          let interval2 = setInterval(function () {
            hero.style.top = +getCurrentPosition(hero).y + 2 + 'px';
            if (j > topOffset/2) {
              clearInterval(interval2);
            }
            j++;
          }, 1);
        }
        i++;
      }, 1);
    }
  });

  function getCurrentPosition(element) {
    var y = +element.offsetTop;
    var x = +element.offsetLeft;
    return {x: x, y: y};
  }
};