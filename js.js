const table = [...document.querySelectorAll('[data-key]')];
const all = document.querySelector('.text');
const wrap = document.querySelector('.wrap');

const keyboard = document.createElement('div')
keyboard.classList.add('keyboard');

document.querySelector('.reset').addEventListener('click', () => {
      table.forEach(item => {
            item.classList.remove('active');
            item.classList.remove('focus');
      })
})


table.forEach(item => {
      item.addEventListener('click', (e) => {
            item.classList.add('active');``
      })
      item.addEventListener('dblclick', () => {
            item.classList.remove('active');
            item.classList.remove('focus');
      })
})

window.addEventListener('keydown', e => {
      all.textContent = e.code + " " + e.keyCode;
      let cell = table.filter((item) => item.dataset.key == e.code);
      if (cell.length == 0) {
            wrap.appendChild(keyboard);
            const div = document.createElement('div');
            div.textContent = e.key;
            div.dataset.key = e.code;
            div.classList.add('key');
            div.classList.add('active');
            div.classList.add('new');
            table.push(div);
            keyboard.appendChild(div);
            div.addEventListener('click', () => {
                  item.classList.add('active');
            })
            div.addEventListener('dblclick', () => {
                  item.classList.remove('active');
                  item.classList.remove('focus');
            })
      }
      table.forEach(item => {
            if (item.dataset.key == e.code)
                  item.classList.add('focus');
      })
})

window.addEventListener('keyup', e => {
      table.forEach(item => {
            if (item.dataset.key == e.code) {
                  item.classList.add('active');
                  setTimeout(() => {
                        item.classList.remove('focus');
                  }, 500)
            }
      })
})

window.addEventListener('mousedown', e => {
      all.textContent = `MouseButton` + e.button + " " + e.button;
      let cell = table.filter((item) => item.dataset.key == e.button);
      if (cell.length == 0) {
            wrap.appendChild(keyboard);
            const div = document.createElement('div');
            div.textContent = `MouseButton` + e.button;
            div.dataset.key = e.button;
            div.classList.add('key');
            div.classList.add('active');
            div.classList.add('new');
            table.push(div);
            keyboard.appendChild(div);
            div.addEventListener('click', () => {
                  item.classList.add('active');
            })
            div.addEventListener('dblclick', () => {
                  item.classList.remove('active');
                  item.classList.remove('focus');
            })
      }
      table.forEach(item => {
            if (item.dataset.key == e.button) {
                  item.classList.add('focus');
            }
      })
})

window.addEventListener('mouseup', e => {
      table.forEach(item => {
            if (item.dataset.key == e.button) {
                  item.classList.add('active');
                  setTimeout(() => {
                        item.classList.remove('focus');
                  }, 300)
            }
      })
})


// Wylaczenie zdarzen prawe przycisku myszy oraz klawiatury
document.addEventListener('contextmenu', event => event.preventDefault()); // prawy przycisk myszki
window.onload = () => {
      document.onkeydown = e => {
            switch (e.keyCode) {
                  case 9:
                        return (e.which || e.keyCode) != 9; //tab
                  case 112:
                        return (e.which || e.keyCode) != 112; //f1
                  case 114:
                        return (e.which || e.keyCode) != 114; //f3
                  case 116:
                        return (e.which || e.keyCode) != 116; //f5
                  case 117:
                        return (e.which || e.keyCode) != 117; //f6
                  case 118:
                        return (e.which || e.keyCode) != 118; //f7
                  case 121:
                        return (e.which || e.keyCode) != 121; //f10
                  case 122:
                        return (e.which || e.keyCode) != 122; //f11
                  case 123:
                        return (e.which || e.keyCode) != 123; //f12
            }
      };
}
