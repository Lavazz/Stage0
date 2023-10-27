const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

const foodImg = new Image();
foodImg.src = 'assets/apple.png';
foodImg.height = 10;
foodImg.width = 10;

let score = 0;

let food = {
    x: Math.floor((Math.random()*18+1))*32,
    y: Math.floor((Math.random()*18+1))*32,
};

let snake = [];
snake[0] = {
    x: 266,
    y: 266,
};

document.addEventListener("keydown", setDirection);

let direction;

function setDirection(e){
    if(e.keyCode == 37 && direction != "right"){
        direction = "left";
    }else if(e.keyCode == 38 && direction !="down"){
        direction = "up";
    }else if(e.keyCode == 39 && direction !="left"){
        direction = "right";
    }else if(e.keyCode == 40 && direction !="up"){
        direction = "down";
    }
    console.log(`direction: ${direction}`);
}

function addFood(){
    ctx.fillStyle = '#b3c2da';
    ctx.fillRect(0, 0, 576, 576);
    ctx.drawImage(foodImg,  food.x, food.y);
    
    for(let i=0; i<snake.length; i++){
        ctx.fillStyle = "blue";
        ctx.fillRect(snake[i].x, snake[i].y, 32, 32);
    }
 
    //moving
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    popSnake();

 if (direction === "left"){
    snakeX -= 32;
 }   
 if (direction === "right"){
    snakeX += 32;
 } 
 if (direction === "up"){
    snakeY -= 32;
 }           
 if (direction === "down"){
    snakeY += 32;
 } 

 let newHead ={
    x: snakeX,
    y: snakeY
 };

 snake.unshift(newHead);

}

function popSnake(){
console.log('in pop');
    snake.pop();
}

let game = setInterval(addFood, 100);
