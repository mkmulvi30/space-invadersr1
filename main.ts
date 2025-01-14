input.onButtonPressed(Button.A, function () {
    player.move(1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Enemy.isTouching(shoot)) {
            Enemy.delete()
            game.addScore(10)
        }
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    player.move(-1)
})
let Enemy: game.LedSprite = null
let shoot: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let Life = 3
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    Enemy.delete()
})
basic.forever(function () {
    if (Enemy.isTouching(player)) {
        player.delete()
        Life += -1
        basic.pause(500)
        player = game.createSprite(2, 4)
    } else if (Enemy.get(LedSpriteProperty.Y) == player.get(LedSpriteProperty.Y)) {
        game.addScore(-10)
    }
})
basic.forever(function () {
    if (Life == 0 || game.score() == -30) {
        game.gameOver()
    }
})
