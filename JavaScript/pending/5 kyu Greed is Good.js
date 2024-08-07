// Question: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

const game = [5, 1, 3, 4, 4, 4, 4, 4];

function score(dice) {
  const singlePoints = {
    1: 100,
    5: 50,
  };

  const multiplePoints = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };

  const arr = dice.sort((a, b) => a - b);

  const numbers = Object.fromEntries(
    [...new Set(arr)].map((number) => {
      let count = 0;
      for (const el of arr) {
        if (el === number) {
          count++;
        }
      }
      return [number, count];
    })
  );

  const points = Object.keys(numbers).reduce((p, key) => {
    p += Math.trunc(numbers[key] / 3) * multiplePoints[key];

    if (numbers[key] === 1 || numbers[key] === 5) {
      p +=
        (Math.trunc(numbers[key] / 3) || 0) * multiplePoints[key] +
        (numbers[key] % 3 || 0) * singlePoints[key];
    }
    return p;
  }, 0);

  return points;
  // return Object.keys(numbers);
}

console.log(score(game));
