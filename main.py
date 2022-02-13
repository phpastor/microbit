def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pixel_array.clear()
    pixel_array.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

pixel_array: neopixel.Strip = None
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)