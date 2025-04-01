function _new () {
    newGame = true
    dice3 = 0
    dice3 = 0
    dice3 = 0
    scorePlayer2 = 0
    scorePlayer1 = 0
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function roll_dices_2 () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # .
        # . . . #
        # # # # #
        `)
    dice1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    if ((dice1 || dice2 || dice3) == 1) {
        summe = 0
        rollDices1()
    } else {
        summe = dice1 + (dice2 + dice3)
        basic.showNumber(summe)
        scorePlayer2 += summe
        rollDices1()
    }
}
function start_game () {
    rollDices1()
}
function rollDices1 () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    dice1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    if ((dice1 || dice2 || dice3) == 1) {
        roll_dices_2()
        summe = 0
    } else {
        summe = dice1 + (dice2 + dice3)
        basic.showNumber(summe)
        scorePlayer1 += summe
        roll_dices_2()
    }
}
let summe = 0
let dice2 = 0
let dice1 = 0
let scorePlayer1 = 0
let scorePlayer2 = 0
let dice3 = 0
let newGame = false
_new()
basic.forever(function () {
    if (scorePlayer1 == 100 || scorePlayer1 > 100) {
        basic.showString("Player1 won!")
    }
    if (scorePlayer2 == 100 || scorePlayer2 > 100) {
        basic.showString("Player2 won!")
    }
    if (input.buttonIsPressed(Button.B) && newGame == true) {
        start_game()
    }
})
