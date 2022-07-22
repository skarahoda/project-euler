import { sum } from '../../mathUtils';

export const sumNameScores = (names: string[]): number => {
  const nameScores = names.sort().map((name, index) => {
    const nameScore = name.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 64, 0);
    return nameScore * (index + 1);
  });
  return sum(...nameScores);
};
