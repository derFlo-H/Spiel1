input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    zahlA += 1
    if (zahlA == mindKlicks) {
        for (let Index = 0; Index <= 4; Index++) {
            led.unplot(pos, Index)
        }
        pos = pos - 1
        for (let Index = 0; Index <= 4; Index++) {
            led.plot(pos, Index)
        }
        zahlA = 0
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    zahlB += 1
    if (zahlB == mindKlicks) {
        for (let Index = 0; Index <= 4; Index++) {
            led.unplot(pos, Index)
        }
        pos = pos + 1
        for (let Index = 0; Index <= 4; Index++) {
            led.plot(pos, Index)
        }
        zahlB = 0
    }
})
let zahlB = 0
let zahlA = 0
let mindKlicks = 0
let pos = 0
let standpaus = 200
pos = 2
mindKlicks = 5
music.playMelody("A B A B C5 - - - ", 300)
led.plot(2, 2)
basic.pause(standpaus)
led.plot(2, 1)
led.plot(2, 3)
basic.pause(standpaus)
led.plot(2, 0)
led.plot(2, 4)
music.playMelody("C5 B C5 - - - - - ", 120)
basic.forever(function () {
	
})
