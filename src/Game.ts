import { sdk } from '@smoud/playable-sdk';
import * as Phaser from 'phaser';
// Using assets/* alias configured in tsconfig.json for direct assets import
import buttonBg from 'assets/button.png';

class MainScene extends Phaser.Scene {
  private installButton!: Phaser.GameObjects.Container;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('button', buttonBg);
  }

  create() {
    // Set up resize listener
    sdk.on('resize', this.resize, this);

    // Create container for button positioning
    this.installButton = this.add.container(this.cameras.main.centerX, this.cameras.main.centerY);

    // Create animation container
    const animationContainer = this.add.container(0, 0);
    this.installButton.add(animationContainer);

    // Create button sprite
    const buttonBackground = this.add.image(0, 0, 'button');
    buttonBackground.setScale(0.35);

    // Create text
    const installText = this.add
      .text(0, 0, 'Install', {
        fontFamily: 'cursive',
        fontSize: '35px',
        color: '#ffffff',
        fontStyle: 'bold'
      })
      .setOrigin(0.5);

    // Add shadow to text
    installText.setShadow(4, 4, '#fffc6a', 9, true, true);

    // Add elements to animation container
    animationContainer.add([buttonBackground, installText]);

    // Add pulsing animation to the animation container
    this.tweens.add({
      targets: animationContainer,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Make button interactive
    buttonBackground.setInteractive({ useHandCursor: true });
    buttonBackground.on('pointerdown', () => sdk.install());

    // Set up interaction listener
    sdk.on('interaction', (count: number) => {
      console.log(`Interaction count: ${count}`);

      if (sdk.interactions >= 10) {
        sdk.finish();
      }
    });

    sdk.start();
  }

  private resize = (width: number, height: number) => {
    // Calculate scale based on screen dimensions
    const scaleX = width / 320;
    const scaleY = height / 480;
    const scale = Math.min(scaleX, scaleY); // Use smaller scale to fit both dimensions

    if (this.installButton) {
      this.installButton.setPosition(width / 2, height / 2);
      this.installButton.setScale(scale);
    }
  };

  shutdown() {
    // Clean up listeners when scene is shut down
    sdk.off('resize', this.resize, this);
  }
}

export class Game extends Phaser.Game {
  constructor(width: number, height: number) {
    super({
      type: Phaser.AUTO,
      width,
      height,
      backgroundColor: '#1c1c1c',
      parent: document.body,
      scale: {
        mode: Phaser.Scale.NONE, // We'll handle scaling manually
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: MainScene
    });
  }

  public resize(width: number, height: number): void {
    this.scale.resize(width, height);
  }

  public pause(): void {
    this.scene.pause('MainScene');
    console.log('Game paused');
  }

  public resume(): void {
    this.scene.resume('MainScene');
    console.log('Game resumed');
  }

  public volume(value: number): void {
    this.sound.setVolume(value);
    console.log(`Volume changed to: ${value}`);
  }

  public finish(): void {
    console.log('Game finished');
  }
}
