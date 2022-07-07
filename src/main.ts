import Phaser from "phaser";
import MainScene from "./code/mainScene/MainScene";

let configObject: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#ffffff",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "slot_game",
    width: 1920,
    height: 1080,
  },
  scene: MainScene,
};

new Phaser.Game(configObject);
