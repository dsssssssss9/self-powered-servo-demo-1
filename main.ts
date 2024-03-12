modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showString("1")
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, modules.potentiometer1.position())
})
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P2)
    basic.showString("S")
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showString("2")
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, modules.potentiometer1.position())
})
basic.showIcon(IconNames.Angry)
ContinuousServo.turn_off_motor(DigitalPin.P2)
