"use strict";

const player = function (name, mark) {
  return { name, mark };
};

const playerOne = player("Player 1", "X");
const playerTwo = player("Player 2", "O");

const gameBoard = (() => {
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return { board };
})();

const displayController = (() => {
  gameBoard.board.forEach((element) => {
    const gameBoardSelector = document.querySelector(".game-board");
    const createElementDiv = document.createElement("div");
    createElementDiv.classList.add("game-board-tile");
    createElementDiv.dataset.tile = gameBoard.board.indexOf(element);
    gameBoardSelector.appendChild(createElementDiv);
  });
})();

const game = (() => {
  let mark;
  let currentPlayer = 0;
  let gameStatus = 0;
  const gameStart = document.querySelector(".start-game");
  const display = document.querySelector(".display");

  gameStart.addEventListener("click", () => {
    clearTiles();
    gameStatus = 1;
  });

  let gameBoardTile = document.querySelectorAll(".game-board-tile");
  gameBoardTile.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (gameStatus !== 0) {
        let dataSetTile = tile.dataset.tile;
        let gameBoardTile = gameBoard.board[dataSetTile];

        if (gameBoardTile === "X" || gameBoardTile === "O") {
        } else {
          currentPlayer == 0
            ? (mark = playerOne.mark)
            : (mark = playerTwo.mark);
          gameBoard.board[dataSetTile] = mark;
          tile.textContent = mark;
          tileChecker();

          if (currentPlayer == 0) {
            currentPlayer = 1;
          } else {
            currentPlayer = 0;
          }
        }
      }
    });
  });

  function clearTiles() {
    let test = document.querySelectorAll(".game-board-tile");
    test.forEach((tile) => {
      tile.textContent = "";
    });
    gameBoard.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  function tileChecker() {
    let x = playerOne;
    let o = playerTwo;
    let temp = gameBoard.board;
    let checkerArray = [x.mark, o.mark];

    checkerArray.forEach((player) => {
      let winner = () => {
        gameStatus = 0;
        if (player == "X") {
          display.textContent = `${x.name} wins!`;
        } else {
          display.textContent = `${o.name} wins!`;
        }
      };
      if (temp[0] == player && temp[1] == player && temp[2] == player) {
        winner();
      } else if (temp[3] == player && temp[4] == player && temp[5] == player) {
        winner();
      } else if (temp[6] == player && temp[7] == player && temp[8] == player) {
        winner();
      } else if (temp[0] == player && temp[3] == player && temp[6] == player) {
        winner();
      } else if (temp[1] == player && temp[4] == player && temp[7] == player) {
        winner();
      } else if (temp[2] == player && temp[5] == player && temp[8] == player) {
        winner();
      } else if (temp[0] == player && temp[4] == player && temp[8] == player) {
        winner();
      } else if (temp[2] == player && temp[4] == player && temp[6] == player) {
        winner();
      } else if (
        temp[0] !== 0 &&
        temp[1] !== 1 &&
        temp[2] !== 2 &&
        temp[3] !== 3 &&
        temp[4] !== 4 &&
        temp[5] !== 5 &&
        temp[6] !== 6 &&
        temp[7] !== 7 &&
        temp[8] !== 8
      ) {
        display.textContent = "Its a draw!";
      }
    });
  }
})();
