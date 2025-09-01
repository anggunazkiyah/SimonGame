# Simon Game

A web-based implementation of the classic Simon memory game using HTML, CSS, JavaScript, and jQuery.

## 🌐 Demo

🎮 **[Play the Game Here](https://anggunazkiyah.github.io/SimonGame/)**

## 🎮 How to Play

1. **Start the Game**: Press any key on your keyboard
2. **Watch the Pattern**: The computer will flash a colored button and play a sound
3. **Repeat the Pattern**: Click the buttons in the same order the computer showed
4. **Level Up**: If correct, the computer adds one more color to the sequence
5. **Game Over**: If you make a mistake, the game ends and you can restart

## 🎯 Game Features

- **Progressive Difficulty**: Each level adds one more color to remember
- **Visual Feedback**: Buttons flash when activated
- **Audio Cues**: Each color has a unique sound
- **Game Over Effects**: Red flash and wrong sound when you make a mistake
- **Level Display**: Shows current level in the title

## 📁 Project Structure

```
simon-game/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── game.js             # JavaScript game logic
└── sounds/             # Audio files
    ├── red.mp3
    ├── blue.mp3
    ├── green.mp3
    ├── yellow.mp3
    └── wrong.mp3
```

## 🛠️ Technologies Used

- **HTML5**: Game structure and buttons
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and functionality
- **jQuery**: DOM manipulation and event handling

## 🚀 Getting Started

1. **Download/Clone** the project files
2. **Ensure** you have all the sound files in the `sounds/` folder
3. **Open** `index.html` in your web browser
4. **Press any key** to start playing!

## 🎵 Required Sound Files

Make sure you have these audio files in the `sounds/` folder:
- `red.mp3` - Sound for red button
- `blue.mp3` - Sound for blue button  
- `green.mp3` - Sound for green button
- `yellow.mp3` - Sound for yellow button
- `wrong.mp3` - Sound for wrong answer

## 🎨 CSS Classes Used

- `.btn` - Main button styling
- `.pressed` - Button pressed animation effect
- `.game-over` - Red flash effect for game over

## 📱 Browser Compatibility

Works on all modern browsers that support:
- HTML5 Audio API
- ES6 Template Literals
- jQuery 3.x

## 🐛 Troubleshooting

**No Sound Playing?**
- Check that sound files exist in the `sounds/` folder
- Ensure file names match exactly (case-sensitive)
- Some browsers require user interaction before playing audio

**Buttons Not Responding?**
- Make sure jQuery is loaded
- Check that buttons have correct IDs: `red`, `blue`, `green`, `yellow`
- Verify buttons have the `btn` class

**Game Not Starting?**
- Press any key after the page loads
- Check browser console for JavaScript errors

## 🎯 Game Logic Overview

1. **Initialization**: Game waits for keypress to start
2. **Sequence Generation**: Computer randomly selects colors
3. **User Input**: Player clicks buttons to match the pattern
4. **Validation**: Each click is checked against the computer's sequence
5. **Progression**: Correct sequence leads to next level
6. **Game Over**: Wrong input triggers restart

## 📝 Code Structure

- `nextSequence()` - Generates computer's pattern
- `checkAnswer()` - Validates user input
- `playSound()` - Handles audio playback
- `animatePress()` - Button press animations
- `startOver()` - Resets game variables

## 🏆 Features Implemented

✅ Random color sequence generation  
✅ User input validation  
✅ Progressive difficulty (levels)  
✅ Visual and audio feedback  
✅ Game over detection  
✅ Restart functionality  
✅ Level tracking and display  

## 📄 License

This project is open source and available under the MIT License.

---

**Have fun playing Simon!** 🎉
