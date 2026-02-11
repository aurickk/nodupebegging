// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'any new dupes?',
    'any working dupes?',    
    'any dupes for 1.21.x?',
    'any dupes for donutsmp?',
    'any mods for duping?',
    'can someone help me dupe?',
    'any dupes for no anticheat server?',
    'why isn\'t this dupe working?',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
