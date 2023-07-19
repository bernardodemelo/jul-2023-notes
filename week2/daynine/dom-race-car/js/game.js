class Game {
    constructor() {
      // get all screens. 
      // game and gameEnd are initially hidden
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      
      // we need to create assing the player to a player Class. Leave it to null for now and then we add the player class. 
      // this. player = null;

      // player info
      this.player = new Player(
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
      );

      // style for the game board
      this.height = 600;
      this.width = 500;

      // obstacles that we're going to have. 
      this.obstacles = [];

      // flag to give an info if we're pushing an obstacle
      this.isPushingObstacle = false;

      // score
      this.score = 0;

      // lives
      this.lives = 3;

      // variable to check if the game is over.
      this.gameIsOver = false;
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      // Start the game loop
      this.gameLoop();
    }
  
    gameLoop() {
      // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
      
      // requestAnimationFrame is a JS method that
      // updates information of your screen

      // like am old movie. You have the tape that is nothing more thant photographs (frame). requestAnimationFrame is going to display, clear and display next photograph in order to create animation.

      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      
      // BONUS: score and lives
      let score = document.getElementById('score');
      let lives = document.getElementById('lives');

      score.innerHTML = this.score;
      lives.innerHTML = this.lives;

      // call player move function
      this.player.move();

      // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {

        // Grabbing an obstacle and moving it downards
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();

          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);

          // Reduce player's lives by 1
          this.lives--;
        } 

        // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.score++;

          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array

          this.obstacles.splice(i, 1);
        }
      }
  
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability (this will give a defined delay for the obstacle to appear)
      
      // only when there is no other obstacles on the screen
      if(!this.obstacles.length && !this.isPushingObstacle){
      this.isPushingObstacle = !this.isPushingObstacle;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = !this.isPushingObstacle;
      }, 500);
    }
    }
  
    // Create a new method responsible for ending the game
    endGame() {
      // remove player
      this.player.element.remove();
      this.obstacles.forEach(obstacle => 
      // remove all obstacles
      obstacle.element.remove());
    
      this.gameIsOver = true;
  
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
  }