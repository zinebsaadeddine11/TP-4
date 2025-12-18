  const red = document.querySelector('.red');
  const yellow = document.querySelector('.yellow');
  const green = document.querySelector('.green');
  const startBtn = document.getElementById('startBtn');

  let interval;
  let state = 0;

  function changeLight(){
    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');

    if(state === 0) red.classList.add('active');
    else if(state === 1) green.classList.add('active');
    else if(state === 2) yellow.classList.add('active');

    state = (state + 1) % 3; // passe à l’état suivant
  }

  startBtn.addEventListener('click', () => {
    if(!interval) {
      changeLight(); 
      interval = setInterval(changeLight, 2000);
    }
  });