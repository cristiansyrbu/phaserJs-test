export const reelsSymbols = [
  ["cherry", "banana", "blackberry", "banana", "cherry"],
  ["banana", "blackberry", "cherry", "banana"],
  ["blackberry", "cherry", "banana", "cherry", "cherry", "banana"],
];

// speed of the reels
export const positionShift = 0.15;

// rotation time range for the first reel
export const firstReelRotationTime = {
  min: 1000,
  max: 3000
};

// rotation time range for other reels
export const otherReelsRotationTime = {
  min: 400,
  max: 800
};

export const reelsX = [400, 790, 1180];
export const reelsDefaultY = 360;
export const oneImageShift = 380;