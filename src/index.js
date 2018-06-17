import 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';

var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    scene: {
      BootScene,
      GameScene
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create () {
  this.scene.start(GameScene)
 //   var logo = this.add.image(400, 150, 'logo');

 //   this.tweens.add({
 //       targets: logo,
 //       y: 450,
 //       duration: 2000,
 //       ease: 'Power2',
 //       yoyo: true,
 //       loop: -1
 //   });

}
