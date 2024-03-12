input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_one_way(AnalogPin.P2)
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P2)
    basic.showString("S")
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_other_way(AnalogPin.P2)
    basic.showString("B")
})
basic.showIcon(IconNames.Heart)
ContinuousServo.turn_off_motor(DigitalPin.P2)
basic.forever(function () {
	
})
