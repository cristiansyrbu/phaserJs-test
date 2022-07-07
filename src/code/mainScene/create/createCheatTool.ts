import MainScene from "../MainScene";
import { reelsSymbols } from "../../../configs";
import mainSceneData from "../mainSceneData";

// padding for input images
const padding = 40;

function createCheatTool(this: MainScene): void {
  const cheatToolBackground = this.add.image(0, 0, "cheatToolBackground").setOrigin(0);

  const cheatToolInputsImage = reelsSymbols.map((_, index) => {
    const image = this.add.image(0, 110, "cheatToolInput");
    image.setX(calcInputImageX(index, cheatToolBackground));

    image.setInteractive({ useHandCursor: true  });
    image.on("pointerdown", () => inputImageClick.bind(this)(index));

    mainSceneData.cheatToolValues.push(0);

    return image;
  });

  this.cheatToolInputsText = cheatToolInputsImage.map((image) => {
    return this.add
      .text(image.x, image.y, "0", {
        fontSize: "32px",
        strokeThickness: 2,
      })
      .setOrigin(0.5);
  });

  this.arrow = this.add.image(175, 228, "arrowDown");
  const topText = this.add.text(55, 45, "SYMBOL POSITION IN THE REEL", {
    font: '700 22px Arial',
    color: "#F2E5BF"
  });
  this.arrow.setAngle(0);

  const toolsText = this.add.text(50, 213, "Tools", {
    font: '700 26px Arial',
    //strokeThickness: 2,
  });
  toolsText.setInteractive({ useHandCursor: true  });
  toolsText.input.hitArea.setTo(-18, -12, toolsText.width+97, toolsText.height+25);
  toolsText.on("pointerup", enableCheatTool);
  
  this.cheatToolContainer = this.add.container(0, 0);
  this.cheatToolContainer.add([
    cheatToolBackground,
    this.arrow,
    topText,
    toolsText,
    ...cheatToolInputsImage,
    ...this.cheatToolInputsText,
  ]);
  
  this.cheatToolContainer.setY(-207);
}

function enableCheatTool(): void {
  mainSceneData.cheatTool = !mainSceneData.cheatTool;
}

function calcInputImageX(index: number, backgroundObj: any): number {
  let restWidth = backgroundObj.width - (padding * 2);
  let casetteWidth = Math.round(restWidth / 3);
  let res = backgroundObj.x + padding + (index * casetteWidth) + (Math.floor(casetteWidth / 2));
  return res;
}

function inputImageClick(this: MainScene, index: number): void {
  const { cheatToolValues } = mainSceneData;
  cheatToolValues[index]++;
  if(cheatToolValues[index] > reelsSymbols[index].length - 1) cheatToolValues[index] = 0;

  this.cheatToolInputsText[index].setText(cheatToolValues[index].toString());
}

export default createCheatTool;