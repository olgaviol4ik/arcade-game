// Enemies our player must avoid
class Enemy {               //creating class Enemy
    // instantiating object of class Enemy and passing parameters x, y to it
    constructor(x, y) {    //placing all enemies to array object
        // Variables applied to each of our instances go here,
        // this.sprite is provided to get started
        this.sprite = 'images/enemy-bug.png';// The image/sprite for our enemies, this uses a helper provided to easily load images
        this.x = x;         //defining all the parameters
        this.y = y;
        this.height = 65;
        this.width = 95
        this.collision = false;
    };  
    // Parameter: dt, a time delta between ticks
    update(dt){    // Update the enemy's position, required method for game 
        // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
        //this function is about finding random number 
        if (this.x > ctx.canvas.width + this.width) {
            this.x = -200 * Math.floor(Math.random() * 4) + 1; 
        } else {
            this.x += 150 * dt;
        }
        //check for collision with player
        if (collision(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)) {
            this.collision = true;
    
            if (player) {
                player.x = 202;
                player.y = 400;
            }
        } else {
            this.collision = false;
        }
    }
    render(){       // Draw the enemy on the screen, required method for game
        ctx.drawImage(Resources.get(this.sprite), this.x,this.y)
    }
};

// Now write your own player class
// This class requires an update(), render() and a handleInput() method.
class Player {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.height = 75;
        this.width = 65;
    }
    update(dt) {
        if (game && player.y < 40) {
            game = false;
            won();
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
// The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
//Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down
//Recall that the player cannot move off screen (so you will need to check for that and handle appropriately)
//If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that)
    handleInput(direction) {
        // action events pressed keyboards keys
        const horizontal = 101,
            vertical = 83;

        if (direction === 'left' && this.x - horizontal >= 0) {
            this.x -= horizontal;
        } else if (direction === 'right' && this.x + horizontal < ctx.canvas.width) {
            this.x += horizontal;
        } else if (direction === 'down' && this.y + vertical < ctx.canvas.height - 200) {
            this.y += vertical;
        } else if (direction === 'up' && this.y - vertical > 0 - player.height) {
            this.y -= vertical;
        }
    }

};

// This event listener was provided and it listens for key presses to send the keys to player.handleInput() method.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Now instantiate your objects.
const enemyPosition = [55, 140, 230];

// Place the player object in a variable called player
const player = new Player(202, 400, 'images/char-cat-girl.png');

// Place all enemy objects in an array called allEnemies
let allEnemies = enemyPosition.map((y, index) => {
    return new Enemy((-200 * (index + 1)), y);
});

function won() {
    reset(); //calling on method to return player to the initial position after he won
    console.log('won!');
}
function reset() {      // moves player to the initial location
    allEnemies = [];
}

function collision(px, py, pw, ph, ex, ey, ew, eh) {
    return (Math.abs(px - ex) * 2 < pw + ew) && (Math.abs(py - ey) * 2 < ph + eh);
}
