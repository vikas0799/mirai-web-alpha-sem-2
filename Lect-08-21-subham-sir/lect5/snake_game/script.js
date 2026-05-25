const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;

let snake = [{x:10,y:10}];
let direction = "RIGHT";
let food = {x:10,y:10};
let speed = 300;
let score = 0;

function draw() {
  // Clear canvas
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, canvas.width,
    canvas.height);

  // Draw snake (green)
  ctx.fillStyle = '#00FF00';
  snake.forEach(segment => {
    ctx.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });

  // Draw food (red)
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

function move() {
  // Copy head position
  let head = {
    x: snake[0].x,
    y: snake[0].y
  };

  // Move head based on direction
  if (direction === 'UP') head.y--;
  if (direction === 'DOWN') head.y++;
  if (direction === 'LEFT') head.x--;
  if (direction === 'RIGHT') head.x++;

  // Add new head to front
  snake.unshift(head);

  // Check if food eaten
  if (head.x === food.x &&
      head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop(); // Remove tail
  }
}

document.addEventListener('keydown',
  changeDirection);

function changeDirection(event) {
  const key = event.key;

  // Prevent 180° turns
  if (key === 'ArrowUp' &&
      direction !== 'DOWN')
    direction = 'UP';

  if (key === 'ArrowDown' &&
      direction !== 'UP')
    direction = 'DOWN';

  if (key === 'ArrowLeft' &&
      direction !== 'RIGHT')
    direction = 'LEFT';

  if (key === 'ArrowRight' &&
      direction !== 'LEFT')
    direction = 'RIGHT';
}

function checkCollision() {
  const head = snake[0];

  // Wall collision
  if (head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize)
    return true;

  // Self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x &&
        head.y === snake[i].y)
      return true;
  }

  return false;
}

function placeFood() {
  food.x = Math.floor(
    Math.random() * gridSize);
  food.y = Math.floor(
    Math.random() * gridSize);
}

function gameLoop() {
  // Update game state
  move();

  // Check if game over
  if (checkCollision()) {
    alert('Game Over! Score: '
      + score);
    // Reset game
    snake = [{x: 10, y: 10}];
    direction = 'RIGHT';
    score = 0;
    placeFood();
  }

  // Draw everything
  draw();

  // Schedule next frame
  setTimeout(gameLoop, speed);
}

// Start the game!
placeFood();
gameLoop();