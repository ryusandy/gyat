pins.set_pull(DigitalPin.P14, PinPullMode.PULL_UP)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        pins.digital_write_pin(DigitalPin.P0, 0)
    else:
        pins.digital_write_pin(DigitalPin.P0, 1)
basic.forever(on_forever)
