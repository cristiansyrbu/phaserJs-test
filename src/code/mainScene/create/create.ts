import MainScene from "../MainScene";
import { reelsSymbols, reelsX } from "../../../configs";
import mainSceneData from "../mainSceneData";
import { calculateImageY } from "../tools";
import createCheatTool from "./createCheatTool";
import startGame from "./startGame";

function create(this: MainScene): void {
  let { width } = this.sys.game.canvas;

  addReelsItems.bind(this)();
  addBackground.bind(this)();
  createCheatTool.bind(this)();

  this.spin = this.add.image(width / 2, 960, "spin");
  this.spin.setInteractive({useHandCursor: true});
  this.spin.on('pointerup', startGame.bind(this));

  this.bigWin = this.add.image(width / 2, 200, "bigWin");
  this.bigWin.visible = false;
}

function addReelsItems(this: MainScene): void {
  this.reels = [];

  reelsSymbols.forEach((symbols, reelIndex) => {
    this.reels[reelIndex] = [];
    
    symbols.forEach((symbol, symbolIndex) => {
      this.reels[reelIndex].push(
        this.add.image(reelsX[reelIndex], calculateImageY(symbolIndex, mainSceneData.reelsPosition[reelIndex]), symbol).setOrigin(0,0)
      );
    })
  });
}

function addBackground(this: MainScene): void {
  // get canvas width and height
  let { width, height } = this.sys.game.canvas;

  this.background = this.add.image(0, 0, "background").setOrigin(0, 0);
  this.background.setDisplaySize(width, height);
}

export default create;