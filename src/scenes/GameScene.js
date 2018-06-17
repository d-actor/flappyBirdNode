class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
      physics: {
        system: 'impact',
        gravity: 250,
        debug: false,
        setBounds: false,
      }
    });
  }

  preload() {
    this.load.image('mushroom', './assets/images/mushroom2.png');
    this.load.image('pipes', './assets/images/pipe.png');
  }

  create() {
    this.mushroom = this.physics.add.image(400, 300, 'mushroom').setActive().setVelocity(0, 0);

    this.input.events.on('POINTER_DOWN_EVENT', () => {
      this.mushroom.setVelocity(0, -150);
    });

    this.pipes = this.add.group();

    this.timedEvent = this.time.addEvent({
      delay: 4500,
      callback: this.addPipeRows,
      callbackScope: this,
      loop: true,
    })

    this.mushroom.setTypeA().setCheckAgainstB();

    this.physics.world.events.on('COLLIDE_EVENT', (event) => {
      this.collide(event);
    })
  }
}

export default GameScene;
