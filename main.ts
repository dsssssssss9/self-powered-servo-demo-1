modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showString("1")
    ContinuousServo.spin_one_way(AnalogPin.P2)
})
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
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showString("2")
    ContinuousServo.spin_other_way(AnalogPin.P2)
})
basic.showIcon(IconNames.Square)
ContinuousServo.turn_off_motor(DigitalPin.P2)
basic.forever(function () {
	
})
