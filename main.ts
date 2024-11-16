pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P16, 10)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P16, 150)
    basic.pause(2000)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
    	
    } else {
    	
    }
})
