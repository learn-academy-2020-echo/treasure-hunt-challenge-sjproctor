# React Treasure Hunt

### Remember:
- Pseudocode!!
- Ask clarifying questions

### User Stories
**As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square. (DONE!)**

- $ git checkout -b board-game
- Added a div to Square with an `id="square"`
- Added styling to the id of square
```css
#square {
  height: 200px;
  width: 200px;
  border: 2px solid black;
}
```
- Import Square to App.js
- Map over square component
- Pass value as props
- Add styling and flexbox to gameboard to create the 3x3 grid
- $ git add .
- $ git commit -m "add board game UI and mapped square component"
- $ git push origin board-game
- $ git checkout master
- $ git merge board-game
- $ git branch -d board-game


**As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array. (DONE!)**
- $ git checkout -b alert-index
- Passed index to Square
- Called index onClick in Square
- Created a method in App that got passed to Square
- Passed index to the method that returned that info to App
- $ git add .
- $ git commit -m "added alert that displays the index of our square"
- $ git push origin alert-index
- $ git checkout master
- $ git merge alert-index
- $ git branch -d alert-index


**As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.**
- $ git checkout -b tree-functionality
- Emoji keyboard: control, command, spacebar
- Set the index to be a tree emoji and set state with the updated value
- $ git add .
- $ git commit -m "adds the ability to update the question mark to a tree emoji"
- $ git push origin tree-functionality
- $ git checkout master
- $ git merge tree-functionality
- $ git branch -d tree-functionality

**As a user, if I select the winning square the question mark will become a treasure emoji.**
- $ git checkout -b adding-treasure
- Added treasureLocation to our state object
- componentDidMount to set a random number to treasureLocation
- $ git add .
- $ git commit -m "adds the ability to uncover a treasure at a random location"
- $ git push origin adding-treasure
- $ git checkout master
- $ git merge adding-treasure
- $ git branch -d adding-treasure


- As a user, if I select the losing square the question mark will become a bomb emoji.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.


### Process
- Accept assignment from GitHub classroom
- Clone repo
- cd into correct folder
- run command `yarn`
- open text editor
-
