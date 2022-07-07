import Phaser from "phaser";

import preload from "./preload";
import create from "./create/create";
import update from "./update/update";

class MainScene extends Phaser.Scene {
  preload: () => void;
  create: () => void;
  update: () => void;

  background: Phaser.GameObjects.Image;
  banana: Phaser.GameObjects.Image;
  blackberry: Phaser.GameObjects.Image;
  cheery: Phaser.GameObjects.Image;
  spin: Phaser.GameObjects.Image;
  bigWin: Phaser.GameObjects.Image;
  arrow: Phaser.GameObjects.Image;

  cheatToolContainer: Phaser.GameObjects.Container;
  cheatToolInputsText: Array<Phaser.GameObjects.Text>;
  reels: Array<Array<Phaser.GameObjects.Image>>;

  constructor() {
    super("MainScene");

    this.preload = preload;
    this.create = create;
    this.update = update;
  }
}

export default MainScene;
