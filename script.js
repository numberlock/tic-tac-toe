"use strict";
const player = function (name, mark) {
  return { name, mark };
};

const playerOne = player("playerOne", "X");
const playerTwo = player("playerTwo", "O");

const gameBoard = (() => {
  let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  return { board };
})();
console.log(gameBoard.board);
const displayController = (() => {
  gameBoard.board.forEach((element) => {
    const gameBoardSelector = document.querySelector(".game-board");
    const createElementDiv = document.createElement("div");
    createElementDiv.textContent = element;
    createElementDiv.classList.add("game-board-tile");
    createElementDiv.dataset.tile = element;
    /*     createElementDiv.addEventListener("click", () => {
      gameBoard.board[element] = "x";
      createElementDiv.dataset.tile = element;
      if (gameBoard.board[element] == "x") createElementDiv.textContent = "x";
    });
 */ gameBoardSelector.appendChild(createElementDiv);
  });
})();

const changeTile = (() => {
  return {};
})();

const game = (() => {
  let mark;
  let currentPlayer = 0;

  let gameBoardTile = document.querySelectorAll(".game-board-tile");
  gameBoardTile.forEach((tile) => {
    tile.addEventListener("click", () => {
      let dataSetTile = tile.dataset.tile;
      let gameBoardTile = gameBoard.board[dataSetTile - 1];

      //add rule: cant change already assigned tile
      currentPlayer == 0 ? (mark = playerOne.mark) : (mark = playerTwo.mark);
      gameBoard.board[dataSetTile] = currentPlayer;
      tile.textContent = mark;

      if (currentPlayer == 0) {
        currentPlayer = 1;
      } else {
        currentPlayer = 0;
      }
    });
  });

  function tileChecker() {
    if (game.board[1] == 0 && game.board[2] == 0 && game.board[3] == 0) {
    }
  }
})();

console.log(playerOne.mark);
