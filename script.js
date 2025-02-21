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
}