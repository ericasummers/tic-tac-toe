function Player(mark, name) {
    this.mark = mark;
    this.pName = name;
    this.pChoices = [];
}

// function Board(row, column) {
//     this.rowss = [];
//     this.columns = [];
// }

var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

Player.prototype.checkVictory = function() {
    for (var i = 0; i <= 7; i++) {
        winningCombinations[i] === pChoices;
    }
    if (pChoices === winningCombinations[i]) {
        alert("You won, congratulations!");
    }
}

var playerone = new Player("X", "playerone");
//
//
// function Game(playerone, playertwo, board, turn) {
//     this.new Player = ("x", "playerOne");
//     this.new Player = ("o", "playerTwo");
//     this.new Board = ([1, 2, 3], [1, 2, 3]);
//     // need two sets of brckets?
//     this.turn: function() {
//         Board.checkSpace(clicked box)
//         player.mark
//     }
//
// }
$(function() {
    $("#new-game-button").click(function() {
        $(".grid").show();
    });

    $(".col-md-4").each(function() {
        $(this).click(function() {
            $("p", this).text("hello");
            $(".col-md-4", this).off();
            playerone.pChoices.push(this.id);
            alert(playerone.pChoices);

            playerone.checkVictory(playerone.pChoices);
        });
    });
});


// for .col-md-4 (i=0 i<=9 i++)

// check box allow box to be selected
// if free and check to see
// if the game has been won / no more moves, check
// for user turns
