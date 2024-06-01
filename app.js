let rgbColorsArray = [];
function txtRGBGenerator(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function ColorGenerator() {
  var form = document.querySelector('form');
  const CircleContainer = document.querySelector('.Circle-Container');
  form.addEventListener('submit', (event) => {
    const oldDivs = document.querySelectorAll('.Circle');
    oldDivs.forEach((div) => div.remove());
    rgbColorsArray = [];
    event.preventDefault();
    if (event.target[0].selectedIndex > 0) {
      for (let i = 0; i < 3 * event.target[0].selectedIndex; i++) {
        rgbColorsArray.push(
          `rgb(${Math.floor(Math.random() * 200)},${Math.floor(
            Math.random() * 200
          )},${Math.floor(Math.random() * 200)})`
        );
      }
      const rgbText = document.querySelector('h4');
      rgbText.innerHTML = txtRGBGenerator(rgbColorsArray);
      for (let y = 0; y < rgbColorsArray.length; y++) {
        const box = document.createElement('div');
        CircleContainer.append(box);
        box.classList.add('Circle');
        box.style.backgroundColor = rgbColorsArray[y];
      }
    } else {
      console.log('sheavse');
    }
  });
}

function divGenerator() {
  const body = document.querySelector('body');
  const title = document.createElement('h1');
  const container = document.createElement('div');
  container.classList.add('container');
  body.prepend(container);
  body.prepend(title);
  title.innerHTML = 'Guess The Color';
  const form = document.createElement('form');
  container.append(form);
  const select = document.createElement('select');
  const optionText = ['Choose the Level', 'Easy', 'Middle', 'Difficult'];
  form.append(select);
  for (let x = 0; x < optionText.length; x++) {
    const option = document.createElement('option');
    option.innerHTML = optionText[x];
    option.value = x;
    select.append(option);
  }
  const level = document.createElement('h3');
  select.after(level);
  level.innerHTML = 'Level - ?';
  const score = document.createElement('h3');
  score.innerHTML = 'Score 0';
  level.after(score);
  const SubmitBtn = document.createElement('input');
  SubmitBtn.setAttribute('type', 'submit');
  SubmitBtn.value = 'Start';
  score.after(SubmitBtn);
  const rgbText = document.createElement('h4');
  form.after(rgbText);
  rgbText.innerHTML = 'RGB';
  const CircleContainer = document.createElement('div');
  rgbText.after(CircleContainer);
  CircleContainer.classList.add('Circle-Container');
  ColorGenerator();
}

divGenerator();

var selects = document.querySelector('select');
selects.addEventListener('click', (event) => {
  console.log(event);
  rgbColorsArray = [];
  console.log();
});