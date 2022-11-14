input.onButtonPressed(Button.A, function () {
    basic.showString("que guapo soy")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(20)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        music.playMelody("E - F - E B - D ", 120)
    }
})
