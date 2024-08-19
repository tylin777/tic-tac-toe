# Requirements

- Create a React Native application for a local 2 player tic-tac-toe game
- Display a stack of two game boards on the screen where the first player will make their moves on the top and the second player will make their moves on the bottom
- Moves should be synced across game boards
- Turn order should be enforced
- Display a message when the game is over
- Allow the game to be reset
- Commit the code to a publicly accessible spot so we can review the exercise together

# Hopeful Approach 

## Build a Tile 

The tile will be grey if it has not been selected; red if selected by Player 1 and marked with an X; blue if selected by Player 2 and marked with an O.

## Build a 3x3 Tic-Tac-Toe Board 

The table or background color will reflect whose turn it is, red if Player 1 and blue if Player 2. Turns will alternate.

The tiles can be uniquely identified using a coordinate system:

(0, 0) | (0, 1) | (0, 2)

(1, 0) | (1, 1) | (2, 2)

(2, 0) | (2, 1) | (2, 2)

## Style the Right Borders for the Tic-Tac-Toe Board

## Add Logic to Check Wins

Win Criteria:
- three in a row
- three in a column
- three in a diagonal

Show a Modal component to show who wins and ask "Play Again?"

## Duplicate Board Upside-Down for Player 1

(2, 2) | (2, 1) | (2, 0)

(1, 2) | (1, 1) | (1, 0)

(0, 2) | (0, 1) | (0, 0)

Add a scrim that covers the board for the player when it's not their turn.

## MISC and other thoughts / ideas

- fix: landscape mode, varying device sizes, tablet
- user testing: does the upside-down board make sense?
- localization?

- test iOS
- write tests
- add app icon

- check ties and end game early?
- add undo last move?

