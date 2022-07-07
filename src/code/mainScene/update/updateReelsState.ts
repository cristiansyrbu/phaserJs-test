import mainSceneData from "../mainSceneData";
import {reelsSymbols, positionShift} from "../../../configs";

function updateReelsState(): void {
  const { 
    reelsPosition,
    reelIsStopped,
    reelsRotation,
    reelsCanStop,
    resultShouldBe
  } = mainSceneData;

  reelsPosition.forEach((position, reelIndex) => {
    if(reelIsStopped[reelIndex]) return;

    const length = reelsSymbols[reelIndex].length;
    position += positionShift;

    if(position > length) {
      position = position - length;
      reelsRotation[reelIndex]++;
    }

    if(!shouldNotStop(position, reelIndex)){
      if(reelsCanStop[reelIndex] && resultShouldBe[reelIndex] === Math.floor(position)) {
        position = Math.floor(position);
        reelIsStopped[reelIndex] = true;
        mainSceneData.lastTimestamp = Date.now();
      }
    }
    
    reelsPosition[reelIndex] = position;
  });
}

function shouldNotStop(step: number, reelIndex: number): boolean {
  const {doNotStopOn, reelsRotation} = mainSceneData;

  return (
    Math.floor(step) === Math.floor(doNotStopOn[reelIndex].position) && 
    reelsRotation[reelIndex] === doNotStopOn[reelIndex].rotation
  )
}

export default updateReelsState;