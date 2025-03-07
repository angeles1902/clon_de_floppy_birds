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
    this.load.image("bird","./bird.png")
    this.load.image("background", "./background.jpg")
    this.load.image("pipe", "./pipe.png")
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
    
    for (let i = 1; i < 100; i++) {
        this.pipeDown = this.physics.add.staticImage(1000*(i/2), config.height, 'pipe')
        .setOrigin(1,1)
        .setScale(.5)
        .refreshBody()

        this.pipeUp =this.physics.add.staticImage(1000*(i/2), 0, 'pipe')
        .setOrigin(1, 1)
        .setScale(.5)
        .setAngle(180)
        .refreshBody()
        
        this.hitBird = false

        this.pipeUp.body.setOffset(-this.pipeUp.width / 2, -this.pipeUp.height / 2)

        this.physics.add.collider(this.pipeUp, this.bird, handleHit, null, this)
        this.physics.add.collider(this.pipeDown, this.bird)
    }

    this.cursors = this.inpu.keyboard.createCursorKeys()
    this.keys = this.input.keyboard.addKeys("W, A, S, D")
    this.cameras.main.startFollow(this.bird)
    this.cameras.main.setBounds(0, 0, 5000, config.height)
    this.physics.world.setBounds(0, 0, 5000, config.height)
    this.bird.setVelocityX(120)
}

function update () {
    if (this.hitBird) {return}
    this.bird.rotation = this.bird.body.angle
    if (this.cursors.up.isDown) {
        this.bird.setVelocityY(-250)
    }
}