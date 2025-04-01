function start_game () {
	
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    start_game()
})
function roll_dices () {
	
}
let scorePlayer2 = 0
let scorePlayer1 = 0
basic.showString("Play!")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.forever(function () {
    if (scorePlayer1 == 100) {
        basic.showString("Player1 won!")
    }
    if (scorePlayer2 == 100) {
        basic.showString("Player2 won!")
    }
})
