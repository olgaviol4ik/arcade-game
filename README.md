#Arcade-game project
_________________________________________________________________________________________-

##Instructions
For play game suppose to download repository and launch file index.html. Game compatibility with Chrome and Mozila firefox browser.
For move player use ⬅️, ➡️, ⬇️, ⬆️ keys on keyboard.

##Rules
Player have to reach water on top by avoiding bugs.

##Working code
Files and folders
The code consist of 3 folders:
images - its has images for game.
css - for style.css file.
js - for app.js engine.js resources.js file.

##Task Description was:
The css folder contains a style.css file which you do not need to edit
The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
The js folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files.
index.html - opening index.html should load the game
README.md should contain instructions on how to load and play the game (you will need to add those instructions).

Inside the app.js file, you will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:

The Enemy function, which initiates the Enemy by:
Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
Setting the Enemy initial location (you need to implement)
Setting the Enemy speed (you need to implement)
The update method for the Enemy
Updates the Enemy location (you need to implement)
Handles collision with the Player (you need to implement)
You can add your own Enemy methods as needed

You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:

The Player function, which initiates the Player by:
Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
Setting the Player initial location
The update method for the Player (can be similar to the one for the Enemy)
The render method for the Player (use the code from the render method for the Enemy)
The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
You can add your own Player methods as needed.

Once you have completed implementing the Player and Enemy, you should instantiate them by:

Creating a new Player object
Creating several new Enemies objects and placing them in an array called allEnemies

Code use module pattern.

Main code locate in engine.js. Code in this file start animation, get images from resources.js file, contains collision (between player and enemies) and win algoritms.

Code locate in app.js define classes and objects (enemies, player etc.). Code in resources.js load images to cash and return for code in engine.js.




frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
