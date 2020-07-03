function setup() {
  createCanvas(0);
  let lines = 0;
  let lines_button;
  let lines_element;

  let shorts = 0;
  let shorts_button;
  let shorts_element;

  let orders = 0;
  let order_button;
  let order_element;

  let lates = 0;
  let lates_button;
  let lates_element;

  lines_element = createElement('span', lines).addClass('b');
  shorts_element = createElement('span', shorts).addClass('b');
  lates_element = createElement('span', lates).addClass('b');
  order_element = createElement('span', orders).addClass('b');

  lines_button = createButton('Increase').addClass('mainClicker').mousePressed(() => lines_element.html(++lines));
  shorts_button = createButton('Increase').addClass('mainClicker').mousePressed(() => shorts_element.html(++shorts));
  lates_button = createButton('Increase').addClass('mainClicker').mousePressed(() => lates_element.html(++lates));
  order_button = createButton('Increase').addClass('mainClicker').mousePressed(() => order_element.html(++orders));

  lines_button_minus = createButton('Decrease').addClass('mainClicker').mousePressed(() => lines_element.html(--lines));
  shorts_button_minus = createButton('Decrease').addClass('mainClicker').mousePressed(() => shorts_element.html(--shorts));
  lates_button_minus = createButton('Decrease').addClass('mainClicker').mousePressed(() => -lates_element.html(--lates));
  order_button_minus = createButton('Decrease').addClass('mainClicker').mousePressed(() => order_element.html(--orders));
}