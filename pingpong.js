const ball = document.querySelector('#ball');
const leftPaddle = document.querySelector('#left-paddle');
const rightPaddle = document.querySelector('#right-paddle');

let xDirection = 1;
let yDirection = 1;

let x = 290;
let y = 190;

let leftPaddleY = 160;
let rightPaddleY = 160;

function updateBall() {
  x += xDirection;
  y += yDirection;

  if (y >= 380 || y <= 0) {
    yDirection = -yDirection;
  }

  if (x >= 580) {
    xDirection = -xDirection;
    x = 290;
    y = 190;
  }

  if (x <= 0) {
    xDirection = -xDirection;
    x = 290;
    y = 190;
  }

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  if (x <= 40 && y >= leftPaddleY && y <= leftPaddleY + 80) {
    xDirection = 1;
  }

  if (x >= 540 && y >= rightPaddleY && y <= rightPaddleY + 80) {
    xDirection = -1;
  }
}

function updatePaddlePositions() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp' && rightPaddleY > 0) {
      rightPaddleY -= 10;
      rightPaddle.style.top = `${rightPaddleY}px`;
    }

    if (event.code === 'ArrowDown' && rightPaddleY < 320) {
      rightPaddleY += 10;
      rightPaddle.style.top = `${rightPaddleY}px`;
    }

    if (event.code === 'KeyW' && leftPaddleY > 0) {
      leftPaddleY -= 10;
      leftPaddle.style.top = `${leftPaddleY}px`;
    }

    if (event.code === 'KeyS' && leftPaddleY < 320) {
      leftPaddleY += 10;
      leftPaddle.style.top = `${leftPaddleY}px`;
    }
  });
}

setInterval(updateBall, 10);
updatePaddlePositions();
