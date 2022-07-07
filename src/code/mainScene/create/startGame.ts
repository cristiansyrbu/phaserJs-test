import { reelsSymbols } from "../../../configs";
import mainSceneData from "../mainSceneData";
import { getArrayOfRandomIndexes, getMinTimeArray } from "../tools";
import MainScene from "../MainScene";

function startGame(this: MainScene): void {
  if(mainSceneData.state !== 'idle') return;
  console.log("Star has worked")
  mainSceneData.minimumDuration = getMinTimeArray(reelsSymbols.length);
  mainSceneData.reelIsStopped = reelsSymbols.map(() => false);
  mainSceneData.reelsRotation = reelsSymbols.map(() => 0);
  mainSceneData.lastTimestamp = Date.now();
  mainSceneData.reelsCanStop = reelsSymbols.map(() => false);//false;
  mainSceneData.doNotStopOn = reelsSymbols.map(() => ({
    position: 0,
    rotation: 0
  }));
  this.spin.setTint(0x808080);
  this.spin.disableInteractive();
  mainSceneData.state = 'rotating';

  if(mainSceneData.cheatTool) {
    mainSceneData.resultShouldBe = mainSceneData.cheatToolValues;
  }else{ 
    mainSceneData.resultShouldBe = getArrayOfRandomIndexes(reelsSymbols);
  }
}

export default startGame;