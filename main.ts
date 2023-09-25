function gewinn () {
    music.playMelody("F G G A B A B C5 ", 333)
    for (let Index = 0; Index <= punktA; Index++) {
        led.plot(0, Index - 1)
    }
    for (let Index = 0; Index <= punktB; Index++) {
        led.plot(4, Index - 1)
    }
    basic.pause(1000)
    if (punktA == 5) {
        basic.showIcon(IconNames.ArrowWest)
        music.playMelody("F G G A B A B C5 ", 333)
        basic.pause(1000)
        punktA = 0
        punktB = 0
        start()
    } else if (punktB == 5) {
        basic.showIcon(IconNames.ArrowEast)
        music.playMelody("F G G A B A B C5 ", 333)
        basic.pause(1000)
        punktA = 0
        punktB = 0
        start()
    } else {
        start()
    }
}
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
        music.playMelody("C5 - - - - - - - ", 213)
        if (pos == -1) {
            punktA += 1
            gewinn()
        }
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
        music.playMelody("C5 - - - - - - - ", 213)
        if (pos == 5) {
            punktB += 1
            gewinn()
        }
    }
})
function start () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    standpaus = 200
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
    music.playMelody("C5 B C5 - - - - - ", 344)
}
let standpaus = 0
let zahlB = 0
let pos = 0
let mindKlicks = 0
let zahlA = 0
let punktB = 0
let punktA = 0
start()
