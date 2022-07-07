import MainScene from "../MainScene";
import mainSceneData from "../mainSceneData";
import updateReelsImages from "./updateReelsImages";
import updateReelsState from "./updateReelsState";
import { reelsSymbols } from "../../../configs";

function update(this: MainScene): void {
  updateCheatTool.bind(this)();
  if(mainSceneData.state === 'rotating'){
    updateIfReelsCanStop();
    updateReelsState();
    updateReelsImages.bind(this)();
    if(allReelsHasStopped()) {
      endGame.bind(this)();
    }
  }
}

function updateCheatTool(this: MainScene): void {
  let newY: number = this.cheatToolContainer.y;
  let newAngle: number = this.arrow.angle;

  const yShift = 25;
  const angleShift = 25;

  if(mainSceneData.cheatTool) {
    if(this.cheatToolContainer.y < 0) newY += yShift;
    if(newY > 0) newY = 0;

    if(newAngle > -180) newAngle -= angleShift;
    if(newAngle < -180) newAngle = -180;
  }else {
    if(this.cheatToolContainer.y > -207) newY -= yShift;
    if(newY < -207) newY = -207;

    if(newAngle < 0) newAngle += angleShift;
    if(newAngle > 0) newAngle = 0;
  }

  this.cheatToolContainer.setY(newY);
  this.arrow.setAngle(newAngle);
}

function endGame(this: MainScene): void {
  const endFunc = enableSpinButton.bind(this);

  if(isBigWin()){
    this.bigWin.visible = true;
    mainSceneData.state = 'big-win';

    setTimeout(()=>{
      endFunc();
      this.bigWin.visible = false;
    }, 2000);
  }else{
    endFunc();
  }
}

function enableSpinButton(this: MainScene): void {
  this.spin.setTint(0xffffff);
  this.spin.setInteractive();
  mainSceneData.state = 'idle';
}

function isBigWin(): boolean {
  let firstReelImage = reelsSymbols[0][mainSceneData.reelsPosition[0]];
  for(let i=1; i<reelsSymbols.length; i++){
    if(reelsSymbols[i][mainSceneData.reelsPosition[i]] !== firstReelImage) return false;
  }

  return true;
}

function allReelsHasStopped(): boolean {
  let hasStopped = true;
  mainSceneData.reelIsStopped.forEach(state => {
    if(!state) hasStopped = false;
  });
  return hasStopped;
}

function updateIfReelsCanStop(): void {
  reelsSymbols.forEach((_, reelIndex) => {
    checkIfReelCanStop(reelIndex);
  });
}

function checkIfReelCanStop(reelIndex: number): void {
  const { lastTimestamp, minimumDuration, reelsRotation, reelsPosition } = mainSceneData;

  if(mainSceneData.reelsCanStop[reelIndex]) return;

  if(Date.now() - lastTimestamp > minimumDuration[reelIndex] && previousReelHasStopped(reelIndex)) {
    mainSceneData.doNotStopOn[reelIndex] = {
      rotation: reelsRotation[reelIndex],
      position: reelsPosition[reelIndex]
    }
    mainSceneData.reelsCanStop[reelIndex] = true;
  }
}

function previousReelHasStopped(index: number): boolean {
  if(index === 0) return true;

  return mainSceneData.reelIsStopped[index - 1];
}

export default update;