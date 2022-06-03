let Marks = 0
input.onButtonPressed(Button.A, function () {
    Marks = randint(0, 25)
    if (Marks >= 20) {
        basic.showString("Well done!")
    } else if (Marks >= 15) {
        basic.showString("Good effort.")
    } else if (Marks >= 10) {
        basic.showString("You can do better")
    } else {
        basic.showString("Put more effort")
    }
})
input.onButtonPressed(Button.B, function () {
    Marks = randint(0, 25)
    if (Marks <= 9) {
        basic.showString("Put more effort.")
    } else if (Marks <= 14) {
        basic.showString("You can do better")
    } else if (Marks <= 19) {
        basic.showString("Good effort.")
    } else {
        basic.showString("Well done!")
    }
})
