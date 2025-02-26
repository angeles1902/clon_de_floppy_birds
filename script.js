const config = {
    width: 500,
    height: 500,
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#616a6b',
    scene: { preload, create, update},
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:600},
            debug: true
        }
    }
}

new Phaser.Game(config)

function preload() {
    this.load.image("bird","/bird.png")
    this.load.image("background", "/background.jpg")
    this.load.image("pipe", "pipe.png")
}

function create() {
    const background = []

    for (let i = 0; i < 100; i++) {
        background.push(this.add.sprite(0, config.height, 'background')
        .setOrigin(1, 1)
        .setScale(1.1)
    )
        
    }

    Phaser.Actions.AlignTo(background, Phaser.Display.Align.RIGHT_BOTTOM)

    this.bird = this.physics.add.image(config.width / 2, config.height / 2, "bird")
        .setColliderWorldBounds(true)
        .setScale(.05)
}