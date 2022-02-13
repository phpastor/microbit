input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, speed1)
    pins.servoWritePin(AnalogPin.P2, speed2)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, speed1)
    pins.servoWritePin(AnalogPin.P1, speed2)
})
let speed2 = 0
let speed1 = 0
let speed = 50
speed1 = speed + 90
speed2 = 90 - speed
