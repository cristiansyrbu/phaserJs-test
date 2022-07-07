import { reelsDefaultY, oneImageShift, firstReelRotationTime, otherReelsRotationTime } from "../../configs";

export function calculateImageY(index:number, reelPosition: number): number {
 return (reelsDefaultY - (index * oneImageShift)) + (reelPosition * oneImageShift);
}

// get a random integer between min (inclusive) and max (inclusive)
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomImageIndex(itemsLength: number): number {
  return getRandomInt(0, itemsLength - 1);
}

export function getArrayOfRandomIndexes(reelsItems: Array<any>): Array<number> {
  return reelsItems.map((items)=>{
    return getRandomImageIndex(items.length);
  });
}

export function getMinTimeArray(length: number): Array<number> {
  let minTime = getRandomInt(firstReelRotationTime.min, firstReelRotationTime.max);
  let timeArray = [];

  for (let i = 0; i < length; i++) {
    timeArray.push(minTime);
    minTime = getRandomInt(otherReelsRotationTime.min, otherReelsRotationTime.max);;
  }

  return timeArray;
}