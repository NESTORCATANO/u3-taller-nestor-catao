basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) >= 500 && input.acceleration(Dimension.X) <= 1023) {
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # #
            . # # # #
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) >= 5 && input.acceleration(Dimension.X) <= 500) {
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # #
            . # # # #
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) >= 5 && input.acceleration(Dimension.X) <= 500) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) < -500 && input.acceleration(Dimension.X) > -1023) {
        basic.showLeds(`
            . . # . .
            # # # # .
            # # # # #
            # # # # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) < -5 && input.acceleration(Dimension.X) > -500) {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
        while (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(2)
        }
        basic.clearScreen()
        basic.pause(500)
    }
})
