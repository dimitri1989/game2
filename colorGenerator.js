let rgbColorsArray = [];
var scoreCount = 0;
var trueFalse = null;
var clickleft = false;
function txtRGBGenerator(array) {
  return array.length > 0
    ? array[Math.floor(Math.random() * array.length)]
    : 'RGB';
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
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      rgbText.before(wrapper)
    
      const aLink = document.createElement("a");
      aLink.title = "Help button"
      wrapper.append(aLink)
      aLink.innerHTML="help" 
      aLink.addEventListener("click",()=>{
      
        document.querySelector(".container").style.backgroundColor = rgbText.innerText
        setTimeout(()=>{
          document.querySelector(".container").style.backgroundColor = "#0C0C0C"
        }, 1000)
      })
      
      rgbText.innerHTML = txtRGBGenerator(rgbColorsArray);
      for (let y = 0; y < rgbColorsArray.length; y++) {
        const box = document.createElement('div');
        CircleContainer.append(box);
        box.classList.add('Circle');
        box.style.backgroundColor = rgbColorsArray[y];
      }
    } else {
      const select = document.querySelector('select');
      select.classList.toggle('errorDiv');
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
  const score = document.createElement('div');
  score.classList.add('h3score');
  score.innerHTML = `Score ${scoreCount}`;
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
function clearRGB() {
  selects.addEventListener('change', (event) => {
    rgbColorsArray = [];
    const oldDivs = document.querySelectorAll('.Circle');
    oldDivs.forEach((div) => div.remove());
    const rgbText = document.querySelector('h4');
    rgbText.innerHTML = txtRGBGenerator(rgbColorsArray);
    const level = document.querySelector('h3');
    level.innerHTML =
      event.target.options[event.target.selectedIndex].innerHTML !=
      'Choose the Level'
        ? event.target.options[event.target.selectedIndex].innerHTML
        : 'Level -?';
  });
}
clearRGB();

function getBGColor() {
  const box = document.querySelector('.Circle-Container');
  box &&
    box.addEventListener('click', (event) => {
      const rgbText = document.querySelector('h4');
      var bgColor = window.getComputedStyle(event.target, null);
      if (
        bgColor.getPropertyValue('background-color').replace(/\s/g, '') ===
          rgbText.textContent &&
        event.target.className !== 'Circle-Container'
      ) {
        win();
      } if(bgColor.getPropertyValue('background-color').replace(/\s/g, '') !==
      rgbText.textContent &&
    event.target.className !== 'Circle-Container') {
        lose();
      }
    });
}
getBGColor();
function win() {
  const body = document.querySelector('body');

  const success = document.createElement('div');
  success.classList.add('success');
  body.append(success);
  const pyro = document.createElement('div');
  pyro.classList.add('pyro');
  success.append(pyro);
  const before = document.createElement('div');
  const after = document.createElement('div');
  before.classList.add('before');
  after.classList.add('after');
  pyro.append(before);
  pyro.append(after);
  scoreCount = scoreCount + 1;
  document.querySelector('.h3score').innerHTML = `Score ${scoreCount}`;
  trueFalse = true;
  windowBox(success, trueFalse, scoreCount);
}
function lose() {
  const body = document.querySelector('body');

  const success = document.createElement('div');
  success.classList.add('success');
  body.append(success);
  scoreCount = scoreCount - 1;
  document.querySelector('.h3score').innerHTML = `Score ${scoreCount}`;
  trueFalse = false;
  windowBox(success, trueFalse, scoreCount , clickleft);
}

function windowBox(success, bulean, scoreCount) {
  const windowBox = document.createElement('div');
  windowBox.classList.add('window-box');
  success.prepend(windowBox);
  if (bulean) {
    const checkIcon = document.createElement('div');
    checkIcon.classList.add('check-icon');
    windowBox.prepend(checkIcon);
    const span1 = document.createElement('span');
    span1.classList.add('icon-line');
    span1.classList.add('line-tip');
    checkIcon.prepend(span1);
    const span2 = document.createElement('span');
    span2.classList.add('icon-line');
    span2.classList.add('line-long');
    span1.after(span2);
    const iconcircle = document.createElement('div');
    iconcircle.classList.add('icon-circle');
    span2.after(iconcircle);
    const iconFix = document.createElement('div');
    iconFix.classList.add('icon-fix');
    iconcircle.after(iconFix);
    const answerOKText = document.createElement('div');
    checkIcon.after(answerOKText);
    answerOKText.classList.add('answerOK');
    answerOKText.innerHTML = 'Success!';
    const scoreText = document.createElement('div');
    scoreText.classList.add('scoretext');
    scoreText.innerHTML = `You Passed by ${scoreCount} score`;
    answerOKText.after(scoreText);
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.classList.add('closeBtn');
    scoreText.after(closeBtn);
    const sound = new Audio();
    sound.src = '1.mp3';
    sound.play();
    closeBtn.innerText = 'OK';
    const handleClick = () => {
      let rgbColorsArray = [];
      success.remove()
      const oldDivs = document.querySelectorAll('.Circle');
      oldDivs.forEach((div) => div.remove());
      const rgbText = document.querySelector('h4');
      rgbText.innerHTML = txtRGBGenerator(rgbColorsArray);
      sound.pause();
      sound.currentTime = 0;
    };
    closeBtn.addEventListener('click', handleClick);
    success.addEventListener('click', handleClick);
  } if(!bulean) 
    {
      
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('boxContainer');
    const circleBorder = document.createElement('div');
    circleBorder.classList.add('circle-border');
    windowBox.prepend(boxContainer);
    boxContainer.prepend(circleBorder);
    const circleError = document.createElement('div');
    circleError.classList.add('circle');
    circleBorder.after(circleError);
    const Error = document.createElement('div');
    circleError.append(Error);
    Error.classList.add('error');
    const answerOKText = document.createElement('div');
    boxContainer.after(answerOKText);
    answerOKText.classList.add('answerOK');
    answerOKText.innerHTML = 'Wrong!';
    const scoreText = document.createElement('div');
    scoreText.classList.add('scoretext');
    scoreText.innerHTML = `Do you want to continue`;
    answerOKText.after(scoreText);
    const closeBtn2 = document.createElement('button');
    closeBtn2.setAttribute('type', 'button');
    closeBtn2.classList.add('closeBtn');
    scoreText.after(closeBtn2);
    const sound = new Audio();
    sound.src = '2.mp3';
    sound.play();
    closeBtn2.innerText = 'OK';
    const handleClick2 = (event) => {
      const CircleBox = document.querySelector(".Circle");
      const window_box = document.querySelector(".window-box");
      
    
      if(event.target.className !== "Circle")
      
      success.style.display="none"
    };
    event.target.style.visibility= "hidden"
    closeBtn2.addEventListener('click', handleClick2(event));
    success.addEventListener('click', handleClick2);

  }
}
