dice1 = 0
dice2 = 0
dice3 = 0
summe = 0
scorePlayer1 = 0
newGame = False
scorePlayer2 = 0
def roll_dices_2():
    global dice1, dice2, dice3, summe, scorePlayer1
    basic.show_leds("""
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        """)
    dice1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    if (dice1 or dice2 or dice3) == 1:
        summe = 0
        rollDices1()
    else:
        summe = dice1 + (dice2 + dice3)
        basic.show_number(summe)
        scorePlayer1 += summe
        rollDices1()
def start_game():
    rollDices1()
def rollDices1():
    global dice1, dice2, dice3, summe, scorePlayer1
    basic.show_leds("""
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        """)
    dice1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    if (dice1 or dice2 or dice3) == 1:
        roll_dices_2()
        summe = 0
    else:
        summe = dice1 + (dice2 + dice3)
        basic.show_number(summe)
        scorePlayer1 += summe
        roll_dices_2()
def newGame2():
    global newGame, dice3, scorePlayer2, scorePlayer1
    newGame = True
    dice3 = 0
    dice3 = 0
    dice3 = 0
    scorePlayer2 = 0
    scorePlayer1 = 0
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)

def on_forever():
    if scorePlayer1 == 100 or scorePlayer1 > 100:
        basic.show_string("Player1 won!")
    if scorePlayer2 == 100 or scorePlayer2 > 100:
        basic.show_string("Player2 won!")
    if input.button_is_pressed(Button.B) and newGame == True:
        start_game()
basic.forever(on_forever)
