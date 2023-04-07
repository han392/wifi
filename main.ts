let fourth = 0
let third = 0
let second = 0
let first = 0
let stats = 0
let what = 1
let c1 = 1
let c2 = 2
let c3 = 3
let c4 = 4
pins.analogWritePin(AnalogPin.P1, 180)
let motorstats = 0
basic.showNumber(stats)
OLED.init(128, 64)
OLED.writeStringNewLine("Insert your Password with 'A' Button")
OLED.newLine()
OLED.writeStringNewLine("Insert it slowly")
OLED.newLine()
OLED.writeStringNewLine("Confirm to press 'B' Button")
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (motorstats == 1) {
            pins.analogWritePin(AnalogPin.P1, 180)
            motorstats = 0
            what += 1
        } else {
            if (what == 1) {
                first = stats
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.clearScreen()
                what += 1
                stats = 0
                basic.showNumber(stats)
            } else if (what == 2) {
                second = stats
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.clearScreen()
                what += 1
                stats = 0
                basic.showNumber(stats)
            } else if (what == 3) {
                third = stats
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.clearScreen()
                what += 1
                stats = 0
                basic.showNumber(stats)
            } else if (what == 4) {
                fourth = stats
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.clearScreen()
                if (first == c1 && (second == c2 && (third == c3 && fourth == c4))) {
                    pins.analogWritePin(AnalogPin.P1, 80)
                    motorstats = 1
                    what = 0
                    basic.showIcon(IconNames.Yes)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    basic.showIcon(IconNames.No)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    } else if (input.buttonIsPressed(Button.A)) {
        if (stats < 9) {
            stats += 1
            basic.showNumber(stats)
        } else {
            stats = 0
            basic.showNumber(stats)
        }
    } else {
    	
    }
})
