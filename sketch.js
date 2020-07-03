function setup() {
  createCanvas(0, 0);
  let lines = 0;
  let shorts = 0;
  let orders = 0;
  let lates = 0;

  lines_element = createElement('span', lines).addClass('b');
  shorts_element = createElement('span', shorts).addClass('b');
  lates_element = createElement('span', lates).addClass('b');
  order_element = createElement('span', orders).addClass('b');

  lines_button = createButton('+').addClass('mainClicker').mousePressed(() => lines_element.html(++lines));
  shorts_button = createButton('+').addClass('mainClicker').mousePressed(() => shorts_element.html(++shorts));
  lates_button = createButton('+').addClass('mainClicker').mousePressed(() => lates_element.html(++lates));
  order_button = createButton('+').addClass('mainClicker').mousePressed(() => order_element.html(++orders));

  lines_button_minus = createButton('-').addClass('mainClicker').mousePressed(() => lines_element.html(--lines));
  shorts_button_minus = createButton('-').addClass('mainClicker').mousePressed(() => shorts_element.html(--shorts));
  lates_button_minus = createButton('-').addClass('mainClicker').mousePressed(() => -lates_element.html(--lates));
  order_button_minus = createButton('-').addClass('mainClicker').mousePressed(() => order_element.html(--orders));
}