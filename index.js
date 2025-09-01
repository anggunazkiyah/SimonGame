// Game variables
const buttonColours = ["red", "blue", "green", "yellow"]; // Available button colors
var userClickedPattern = []; // Array to store user's clicked sequence
var gamePattern = []; // Array to store the computer's generated sequence
var level = 0; // Current game level (starts at 0)
var started = false; // Flag to track if game has started

// Game initialization - start game when any key is pressed
$(document).keypress(function (event) {
  if (!started) {
    nextSequence(); // Start the first sequence
    started = true; // Mark game as started
  }
});

// Function to generate next sequence in the game
function nextSequence() {
  userClickedPattern = []; // Reset user pattern for new level
  level++; // Increase level by 1
  $("h1").text(`Level ${level}`); // Update title with current level

  // Generate random number (0-3) to pick a color
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber]; // Get color from array

  gamePattern.push(randomChosenColour); // Add new color to game sequence

  // Animate the chosen button (flash effect)
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

  // Play sound for the chosen color
  playSound(randomChosenColour);
}

// Handle user button clicks
$(".btn").click(function () {
  // Get the ID of the clicked button (which matches the color)
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour); // Log clicked color for debugging

  // Visual and audio feedback for user click
  animatePress(userChosenColour); // Add pressed animation
  playSound(userChosenColour); // Play sound for clicked button

  // Add user's choice to their pattern array
  userClickedPattern.push(userChosenColour);

  // Check if the user's latest answer is correct
  // Pass the index of the last clicked button
  checkAnswer(userClickedPattern.length - 1);
});

// Function to play sounds
function playSound(song) {
  // Create new audio object with the sound file path
  var audio = new Audio(`sounds/${song}.mp3`);
  audio.play(); // Play the sound
}

// Function to add visual "pressed" effect to buttons
function animatePress(currentColour) {
  // Add CSS class to create pressed effect
  $(`#${currentColour}`).addClass("pressed");

  // Remove the pressed class after 100ms to create flash effect
  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

// Function to check if user's answer is correct
function checkAnswer(currentLevel) {
  // Compare user's click with computer's sequence at current position
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success"); // Log success for debugging

    // Check if user has completed the entire sequence
    if (userClickedPattern.length === gamePattern.length) {
      // User completed sequence correctly, start next level after delay
      setTimeout(function () {
        nextSequence(); // Generate next sequence
      }, 1000); // 1 second delay before next level
    }
  } else {
    // User got the sequence wrong - GAME OVER
    console.log("wrong"); // Log wrong answer for debugging

    // Game over effects
    playSound("wrong"); // Play wrong answer sound
    $("body").addClass("game-over"); // Add red flash effect to body

    // Remove red flash effect after 200ms
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Update title to show game over message
    $("h1").text("Game Over, Press Any Key to Restart");

    // Reset the game to initial state
    startOver();
  }
}

// Function to reset game variables to initial state
function startOver() {
  level = 0; // Reset level to 0
  gamePattern = []; // Clear the game pattern array
  started = false; // Mark game as not started (allows restart on keypress)
}
