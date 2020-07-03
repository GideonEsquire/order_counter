let bank = 444444;
let clicker;
let auto_clickers = [];
let b;

function setup() {
  createCanvas(0);
  b = createElement('span', bank);
  b.addClass('b');
  clicker = createButton('clickerino');
  clicker.addClass('mainClicker');
  clicker.position(200, 200);
  clicker.mousePressed(() => bankAdd(1));

  for (let i = 1; i < 10; i++) {
    auto_clickers[i] = new Auto_clicker(500, (i - 1) * 40 + 200, 20 ** i);
  }
}

function bankAdd(a) {
  bank += a;
  b.html(int(bank));
}

function auto_add(production = 0.1) {
  setInterval(() => bankAdd(production), 1000);
}