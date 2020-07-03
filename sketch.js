let orders = 0;
let order_button;
let order_element;

let shorts = 0;
let shorts_button;
let shorts_element;

let lates = 0;
let lates_button;
let lates_element;


function setup() {
  createCanvas(0);
  order_element = createElement('span', orders).addClass('b');
  order_button = createButton('Increase').addClass('mainClicker').position(100, 275).mousePressed(() => order_element.html(++orders));
  order_button_minus = createButton('Decrease').addClass('mainClicker').position(100, 350).mousePressed(() => order_element.html(--orders));

  shorts_element = createElement('span', shorts).addClass('b');
  shorts_button = createButton('Increase').addClass('mainClicker').position(350, 275).mousePressed(() => shorts_element.html(++shorts));
  shorts_button_minus = createButton('Decrease').addClass('mainClicker').position(350, 350).mousePressed(() => shorts_element.html(--shorts));

  lates_element = createElement('span', lates).addClass('b');
  lates_button = createButton('Increase').addClass('mainClicker').position(600, 275).mousePressed(() => lates_element.html(++lates));
  lates_button_minus = createButton('Decrease').addClass('mainClicker').position(600, 350).mousePressed(() => -lates_element.html(--lates));
}