const apple = document.getElementById("apple");
let appleEaten = 0;
const startGame = document.getElementById("start");
const pAppleRecord = document.getElementById("recordAppleEaten"); 

const clockGame = 1000;
let playerPosition = {};
let playerLost = false;
apple.style.display = "none";

function randomNumber(min, max){
    let random = Math.random();
    let randomNumber = Math.floor(random * max) + min;
    return randomNumber
}

function game(){
    let tail = 0;
    tailDirection = [];
    tailTrack = false;
    let playerDirection = "";
    let matriz = [];
    const boardgame = document.getElementById("game");
    
    
    for(let i=1;i<=10;i++){
        matriz[i] = [];
        for(let j=1;j<=10;j++){
            matriz[i][j] = document.createElement("div");
            boardgame.appendChild(matriz[i][j]);
            matriz[i][j].style.gridRow = i;
            matriz[i][j].style.gridColumn = j;
            console.log(matriz[i][j]);
        }
    }
    let xApple;
    let yApple; 
    playerPosition.x = randomNumber(1,10);
    playerPosition.y = randomNumber(1,10);
    matriz[playerPosition.y][playerPosition.x].style.backgroundColor = "black";
    function inicialDirection(){
        if((playerPosition.x >= 1) && (playerPosition.x <= 5)){
            playerDirection = "right";
        }
        if((playerPosition.x > 5) && (playerPosition.x <= 10)){
            playerDirection = "left";
        }
        console.log(playerDirection)
    }
    
    function playerChangeDirection(){
        document.addEventListener("keydown", (event)=>{
            if(event.key === "w"){
                playerDirection = "up";
            }
            if(event.key === "d"){
                playerDirection = "right";
            }
            if(event.key === "a"){
                playerDirection = "left";
            }
            if(event.key === "s"){
                playerDirection = "down";
            }
        })
    };
    function playerDirectionController(){
        let deleted = "rgb(159, 194, 194)";
        let put = "black";
        let prevPosition = { x: playerPosition.x, y: playerPosition.y };
        
        if(playerDirection === "up"){
            matriz[playerPosition.y][playerPosition.x].style.backgroundColor = deleted;
            playerPosition.y--
            if((playerPosition.x >= 1) && (playerPosition.x <= 10) && (playerPosition.y >= 1) && (playerPosition.y <= 10)){
                matriz[playerPosition.y][playerPosition.x].style.backgroundColor = put;
                console.log("up")
            }
            else{playerLost = true}
        }
        if(playerDirection === "down"){
            matriz[playerPosition.y][playerPosition.x].style.backgroundColor = deleted;
            playerPosition.y++
            if((playerPosition.x >= 1) && (playerPosition.x <= 10) && (playerPosition.y >= 1) && (playerPosition.y <= 10)){
                matriz[playerPosition.y][playerPosition.x].style.backgroundColor = put;
                console.log("down")
            }
            else{playerLost = true}
        }
        if(playerDirection === "right"){
            matriz[playerPosition.y][playerPosition.x].style.backgroundColor = deleted;
            playerPosition.x++
            if((playerPosition.x >= 1) && (playerPosition.x <= 10) && (playerPosition.y >= 1) && (playerPosition.y <= 10)){
                matriz[playerPosition.y][playerPosition.x].style.backgroundColor = put;
                console.log("right")
            }
            else{playerLost = true}
        }
        if(playerDirection === "left"){
            matriz[playerPosition.y][playerPosition.x].style.backgroundColor = deleted;
            playerPosition.x--
            if((playerPosition.x >= 1) && (playerPosition.x <= 10) && (playerPosition.y >= 1) && (playerPosition.y <= 10)){
                matriz[playerPosition.y][playerPosition.x].style.backgroundColor = put;
                console.log("left")
            }
            else{playerLost = true}
        }
        tailSimulation(prevPosition)
    }
    function havePlayerLost(){
        tailDirection.forEach(tail => {
            if((playerPosition.x === tail[0]) && (playerPosition.y === tail[1])){
                playerLost = true;
            }
        });

        if(playerLost){
            alert("Perdiste")
            playerLost = false;
            playerDirection = "";
            matriz = [];
            playerPosition = {};
            apple.style.display = "none";
            playerPosition.x = randomNumber(1,10);
            playerPosition.y = randomNumber(1,10);
            clearInterval(gameProgress);
        }
    }
    function appleAppears(){
        if(apple.style.display === "none"){
            xApple = randomNumber(1,10);
            yApple = randomNumber(1,10);
            while(matriz[yApple][xApple].style.backgroundColor === "black"){
                xApple = randomNumber(1,10);
                yApple = randomNumber(1,10);
            }
            apple.style.display = "block";
            boardgame.appendChild(apple);
            apple.style.gridColumn = xApple
            apple.style.gridRow = yApple
            console.log("Apple Appears")
        }
        
    }
    function havePlayerAteApple(){
        if((playerPosition.x == xApple) && (playerPosition.y == yApple)){
            appleEaten++;
            pAppleRecord.textContent = appleEaten;
            apple.style.display = "none";
            console.log("Apple Eaten")
        }
    }
    function tailSimulation(prevPosition) {
    if ((playerPosition.x == xApple) && (playerPosition.y == yApple)) {
        tail++;
    }
    if (tail > 0) {
        let deleted = "rgb(159, 194, 194)";
        let put = "black";
        tailDirection.unshift([prevPosition.x, prevPosition.y]);
        if (tailDirection.length > tail) {
            let removed = tailDirection.pop();
            matriz[removed[1]][removed[0]].style.backgroundColor = deleted;
        }
        tailDirection.forEach(([x, y]) => {
            matriz[y][x].style.backgroundColor = put;
        });
    }
}
    let i = 0;
    let gameProgress = setInterval(()=>{
        i++
        if(i === 1){
            inicialDirection();
            playerChangeDirection();
        };
        playerDirectionController();
        appleAppears()
        havePlayerAteApple()
        havePlayerLost()
    },clockGame)
}






startGame.addEventListener("click", game);
