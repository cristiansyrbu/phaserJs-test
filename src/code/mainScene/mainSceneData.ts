import { reelsSymbols } from "../../configs";
import { getArrayOfRandomIndexes, getMinTimeArray } from "./tools";

interface DoNotStopItem {
  rotation: number,
  position: number
}

interface MainSceneData {
  state: 'idle' | 'rotating' | 'big-win',
  minimumDuration: Array<number>,
  reelsPosition: Array<number>,
  resultShouldBe: Array<number>,
  reelIsStopped: Array<boolean>,
  reelsRotation: Array<number>,
  lastTimestamp: number,
  reelsCanStop: Array<boolean>,
  doNotStopOn: Array<DoNotStopItem>,
  cheatTool: boolean,
  cheatToolValues: Array<number>
}

const mainSceneData: MainSceneData = {
  state: 'idle',
  minimumDuration: getMinTimeArray(reelsSymbols.length),
  reelsPosition: getArrayOfRandomIndexes(reelsSymbols),
  resultShouldBe: getArrayOfRandomIndexes(reelsSymbols),
  reelIsStopped: reelsSymbols.map(() => false),
  reelsRotation: reelsSymbols.map(() => 0),
  lastTimestamp: 0,
  reelsCanStop: reelsSymbols.map(() => false),
  doNotStopOn: reelsSymbols.map(() => ({
    position: 0,
    rotation: 0
  })),
  cheatTool: false,
  cheatToolValues: [],
}

export default mainSceneData;