basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
})
