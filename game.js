const width = 10;
const scoreT = document.querySelector(".score");
const startBtn = document.querySelector(".start-btn");
const boxes = document.querySelectorAll(".container div");

let currentPos = 0;
let itemPos = 0;
let snake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

function start() {
    snake.map(i => boxes[i].classList.remove("snake"));
    boxes[itemPos].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    Apple();
    direction = 1;
    scoreT.textContent = score;
    intervalTime = 1000;
    snake = [2, 1, 0];
    currentPos = 0;
    snake.map(i => boxes[i].classList.add("snake"));
    interval = setInterval(move, intervalTime);
}

function move() {
    if (
        (snake[0] + 10 >= (width*width) && direction === width) ||
        (snake[0] % 10 === width-1 && direction === 1) ||
        (snake[0] % 10 === 0 && direction === -1) ||
        (snake[0] - 10 < 0 && direction === -10) ||
        (boxes[snake[0] + direction].classList.contains("snake"))
    ) return clearInterval(interval);

    const tail = snake.pop();
    boxes[tail].classList.remove("snake");
    snake.unshift(snake[0] + direction);

    if (boxes[snake[0]].classList.contains("apple")) {
        boxes[snake[0]].classList.remove("apple");
        boxes[tail].classList.add("snake");
        snake.push(tail);
        score++;
        scoreT.textContent = score;
        clearInterval(interval);
        intervalTime *= speed;
        interval = setInterval(move, interval); 
    }
    boxes[snake[0]].classList.add("snake");
}

function Apple() {
    do{
        itemPos = Math.floor(Math.random() * boxes.length);
    } while(boxes[itemPos].classList.contains('snake')) //making sure apples dont appear on the snake
    boxes[itemPos].classList.add('apple');
}

function moveSnake(e) {
    boxes[currentPos].classList.remove("snake");

    if (e.keyCode == 39) {
        direction = 1;
    } else if (e.keyCode == 38) {
        direction = -10;
    } else if (e.keyCode == 37) {
        direction = -1;
    } else if (e.keyCode == 40) {
        direction = 10;
    }
}

document.addEventListener("keydown", moveSnake);
startBtn.addEventListener("click", start);