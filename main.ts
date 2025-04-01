function roll_dices_2 () {
	
}
function start_game () {
    roll_dices_1()
}
function roll_dices_1 () {
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
        summe = 0
        roll_dices_2()
    } else {
        summe = dice1 + (dice2 + dice3)
        basic.showNumber(summe)
        scorePlayer1 += summe
        roll_dices_2()
    }
}
function newGame () {
    newGame2 = true
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
let scorePlayer2 = 0
let newGame2 = false
let scorePlayer1 = 0
let summe = 0
let dice3 = 0
let dice2 = 0
let dice1 = 0
newGame()
basic.forever(function () {
    if (scorePlayer1 == 100 || scorePlayer1 > 100) {
        basic.showString("Player1 won!")
    }
    if (scorePlayer2 == 100 || scorePlayer2 > 100) {
        basic.showString("Player2 won!")
    }
    if (input.buttonIsPressed(Button.B) && newGame2 == true) {
        start_game()
    }
})
