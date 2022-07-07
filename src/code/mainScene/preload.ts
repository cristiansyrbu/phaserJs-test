function preload(this: Phaser.Scene): void {
  this.load.image("background", "assets/Background.png");
  this.load.image("banana", "assets/Banana.png");
  this.load.image("blackberry", "assets/Blackberry.png");
  this.load.image("cherry", "assets/Cherry.png");
  this.load.image("spin", "assets/Spin.png");
  this.load.image("bigWin", "assets/Win.png");
  this.load.image("cheatToolBackground", "assets/CheatToolBackground.png");
  this.load.image("cheatToolInput", "assets/CheatToolInput.png");
  this.load.image("arrowDown", "assets/Arrow.png");
}

export default preload;
