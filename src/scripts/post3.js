const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

const boardWidth = 560
const boardHeight = 300

const userStartPosition = [230, 10]
let  userCurrentPosition = userStartPosition

const ballStartPosition = [270, 30]
let  ballCurrentPosition = ballStartPosition

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis, yAxis + blockWidth]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

// add block
function addBlock() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}
addBlock()

// add user
const user = document.createElement('div')
user.classList.add('user')
draw(user, userCurrentPosition)
grid.appendChild(user)

function draw(object, currentPosition) {
    object.style.left = currentPosition[0] + 'px'
    object.style.bottom = currentPosition[1] + 'px'
}

function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':          
            if (userCurrentPosition[0] > 0) {
                userCurrentPosition[0] -= 10
                draw(user, userCurrentPosition)
            }
            break

        case 'ArrowRight':          
            if (userCurrentPosition[0] < boardWidth - blockWidth) {
                userCurrentPosition[0] += 10
                draw(user, userCurrentPosition)
            }
            break

    }
}
document.addEventListener('keydown', moveUser)

//add ball
const ballDiameter = 20
const ball = document.createElement('div')
ball.classList.add('ball')
draw(ball, ballCurrentPosition)
grid.appendChild(ball)

let xDirection = 2
let yDirection = 2
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    draw(ball, ballCurrentPosition)
    checkForCollisions()
}

timerId = setInterval(moveBall, 20)

function checkForCollisions() {
    //check for block collisions
    

    //check for wall collision
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
    ) {
        changeDirection()
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
    }
}
function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        xDirection = 2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
}

// function changeDirection() {
//     if (xDirection === 2 && yDirection === 2) {
//       yDirection = -2
//       return
//     }
//     if (xDirection === 2 && yDirection === -2) {
//       xDirection = -2
//       return
//     }
//     if (xDirection === -2 && yDirection === -2) {
//       yDirection = 2
//       return
//     }
//     if (xDirection === -2 && yDirection === 2) {
//       xDirection = 2
//       return
//     }
//   }