var item, courses, current_shopping, total;


courses = ['Calculus  ', 'Linear Algebra ', 'ODEs ', 'PDEs '];
current_shopping = [];
total = [];


document.getElementById('cal').addEventListener('click', (event) => {
  current_shopping.push('Calculus ');
  total.unshift(170);

});

document.getElementById('alg').addEventListener('click', (event) => {
  current_shopping.push('Linear Algebra ');
  total.unshift(190);

});

document.getElementById('ode').addEventListener('click', (event) => {
  current_shopping.push('ODEs ');
  total.unshift(250);

});

document.getElementById('pde').addEventListener('click', (event) => {
  current_shopping.push('PDEs');
  total.unshift(250);

});

document.getElementById('current').addEventListener('click', (event) => {
  while (!!current_shopping.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let new_li = document.createElement('li');
    new_li.innerText = current_shopping.shift();

    event.target.appendChild(new_li);
  }

});

document.getElementById('total').addEventListener('click', (event) => {
  event.target.innerText = total.reduce((a,b) => a+b, 0);

});