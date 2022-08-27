const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '/src/images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let maxFrame = 7;

let gameFrame = 0;
let staggerFrames = 2;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    if (gameFrame % staggerFrames == 0) {
        frameX++;
        if (frameX >= maxFrame) frameX = 0;
    }
    gameFrame++;

    requestAnimationFrame(animate);
};
animate();

function changeState(e) {
    switch(e.key) {
        case 'ArrowLeft': {
            if (frameY != 4) {
                maxFrame = 11;
                frameX = 0;
                frameY = 4;   
                // animate();
            }
            }
            break

          case 'ArrowRight': {
            if (frameY != 3) {
                maxFrame = 9;
                frameX = 0;
                frameY = 3;   
                // animate();    
            }
            }
            break 

            case 'ArrowUp': {
                if (frameY != 1) {
                    maxFrame = 7;
                    frameX = 0;
                    frameY = 1;   
                    // animate();    
                }
                }
                break 
    
                case 'ArrowDown': {
                    if (frameY != 2) {
                        maxFrame = 7;
                        frameX = 0;
                        frameY = 2;   
                        // animate();    
                    }
                    }
                    break 
        

        default: {
            if (frameY != 0) {
                maxFrame = 7;
                frameX = 0;
                frameY = 0;
                // animate();    
            }
        }
    }
}

document.addEventListener('keydown', changeState)



// setInterval(function() {
//     animate();
    
// }, 30)

