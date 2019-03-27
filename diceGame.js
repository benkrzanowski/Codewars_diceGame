function score(dice) {
  let score = 0;
  let countNum = dice.reduce((diceNum, num) => {
    if (num in diceNum) {
      diceNum[num]++;
    } else {
      diceNum[num] = 1;
    }
    return diceNum;
  }, {});
  for (num in countNum) {
    if (num == 1 && countNum[num] >= 3) {
      score += 1000;
      countNum[num] = countNum[num] - 3;
    }
    if (num == 6 && countNum[num] >= 3) score += 600;
    if (num == 5 && countNum[num] >= 3) {
      score += 500;
      countNum[num] = countNum[num] - 3;
    }
    if (num == 4 && countNum[num] >= 3) score += 400;
    if (num == 3 && countNum[num] >= 3) score += 300;
    if (num == 2 && countNum[num] >= 3) score += 200;
    if (num == 1 && countNum[num] >= 1 && countNum[num] <= 2)
      score += countNum[num] * 100;
    if (num == 5 && countNum[num] >= 1 && countNum[num] <= 2)
      score += countNum[num] * 50;
  }
  return score;
}

score([2, 3, 4, 6, 2]);
score([4, 4, 4, 3, 3]);
score([2, 4, 4, 5, 4]);
