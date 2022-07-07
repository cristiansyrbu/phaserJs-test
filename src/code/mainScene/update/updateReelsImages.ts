import MainScene from "../MainScene";
import mainSceneData from "../mainSceneData";
import { reelsSymbols } from "../../../configs";
import { calculateImageY } from "../tools";

function updateReelsImages(this: MainScene): void {
  this.reels.forEach((images, reelIndex) => {
    images.forEach((image, imageIndex) => {
      const reelPosition = mainSceneData.reelsPosition[reelIndex];

      let theY = 0;

      if(reelPosition > reelsSymbols[reelIndex].length - 1 && imageIndex === 0){
        // move first symbol to end
        theY = calculateImageY(reelsSymbols[reelIndex].length, reelPosition);
      }else {
        theY = calculateImageY(imageIndex, reelPosition);
      }

      image.setY(theY);
    });
  });
}

export default updateReelsImages;